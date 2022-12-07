import { useSnippylyClient } from '@snippyly/react';
import React, { useEffect, useState } from 'react';
import './Cursor.css';

function Cursor() {

    const [cursorUsers, setCursorUsers] = useState([]);

    const { client } = useSnippylyClient();

    useEffect(() => {
        if (client) {
            getLiveCursorsOnCurrentDocument();
        }
    }, [client]);

    const getLiveCursorsOnCurrentDocument = () => {
        const cursorElement = client.getCursorElement();
        cursorElement.getLiveCursorsOnCurrentDocument().subscribe((_cursorUsers) => {
            setCursorUsers(_cursorUsers);
        });
    }

    return (
        <div>
            {
                cursorUsers.map((cursorUser) => {
                    return (
                        <div key={cursorUser.userId}>
                            {/* Add custom UI code here */}
                            <span> cursor: {cursorUser?.positionX}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cursor;