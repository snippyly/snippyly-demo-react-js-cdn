import { useEffect, useState } from 'react';
import './App.css';
import { SnippylyContext } from './context/SnippylyContext';
import loadSnippyly from './loadSnippyly';
import Toolbar from './components/Toolbar/Toolber';
import Tabs from './components/Tabs/Tabs';

/**
 * @type {import("@snippyly/types").Snippyly}
 */
var Snippyly;

function App() {

  const [client, setClient] = useState(null);

  const [selectedMenu, setSelectedMenu] = useState();

  useEffect(() => {
    // Load snippyly from cdn using script
    loadSnippyly(init);
  }, [])

  const init = async () => {
    if (window.Snippyly) {
      Snippyly = window.Snippyly;
      const client = await Snippyly.init('TA66fUfxZVtGBqGxSTCz', {
        featureAllowList: [], // To allow specific features only
        // userIdAllowList: ['abcd'], // To allow specific users only
        urlAllowList: [], // To allow snippyly in specific screens only
      }); // Add your Api Key here
      console.log('snippyly client', client);
      setClient(client);

      // Enable attachment feature
      const commentElement = client.getCommentElement();
      commentElement.enableAttachment(true);
      commentElement.showScreenSizeInfo(true);
    }
  }

  return (
    <>
      <SnippylyContext.Provider value={{ client }}>
        <div>
          <snippyly-cursor></snippyly-cursor>
          <snippyly-comments></snippyly-comments>
          <snippyly-comments-sidebar></snippyly-comments-sidebar>
          <snippyly-comment-tool>
            <div className='add-comment-btn'>
              <img src='https://cdn-icons-png.flaticon.com/512/727/727570.png' alt='Add comment' />
            </div>
          </snippyly-comment-tool>
          <Toolbar onMenuSelect={(menu) => setSelectedMenu(menu)} />
          <Tabs selectedMenu={selectedMenu} />
        </div>
      </SnippylyContext.Provider >
    </>
  );
}

export default App;
