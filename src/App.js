import { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolber';
import Tabs from './components/Tabs/Tabs';
import { VeltComments, VeltCommentsSidebar, VeltCommentTool, VeltCursor, VeltProvider } from '@veltdev/react';

function App() {

  const [selectedMenu, setSelectedMenu] = useState();

  const init = async (client) => {
    if (client) {
      // Enable attachment feature
      const commentElement = client.getCommentElement();
      commentElement.enableAttachment(true);
      commentElement.showScreenSizeInfo(true);
    }
  }

  return (
    <>
      <VeltProvider apiKey='TA66fUfxZVtGBqGxSTCz'
        config={{
          featureAllowList: [], // To allow specific features only
          // userIdAllowList: ['abcd'], // To allow specific users only
          urlAllowList: [], // To allow velt in specific screens only
        }} onClientLoad={(client) => init(client)}>
        <div>
          <VeltCursor />
          <VeltComments />
          <VeltCommentsSidebar />
          <VeltCommentTool />
          <Toolbar onMenuSelect={(menu) => setSelectedMenu(menu)} />
          <Tabs selectedMenu={selectedMenu} />
        </div>
      </VeltProvider>
    </>
  );
}

export default App;
