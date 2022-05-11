import React, { useEffect, useState } from 'react'
import { useSnippylyClient } from '../../context/SnippylyContext';

function Presence() {

    const [users, setUsers] = useState({});

    const { client } = useSnippylyClient();

    useEffect(() => {
        console.log('snippyly in presence', client);
        if (client) {
            getOnlineUsers();
        }
    }, [client]);

    const getOnlineUsers = () => {
        const presenceElement = client.getPresenceElement();
        presenceElement.getOnlineUsersOnCurrentDocument().subscribe((users) => {
            console.log('users in react', users);
            setUsers(users);
        });
    }

    return (
        <>
            {
                Object.keys(users).map((key) => {
                    return (
                        <div key={key}>
                            {/* Add custom UI code here */}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Presence;