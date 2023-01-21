import { useState } from 'react';
// import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import chatEngine from './chat-engine';

const DirectChastPage = () => {
    const [username, setUsername] = useState("");
    
    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            {is_direct_chat: true, usernames: [username]},
            () => setUsername("")
        )
    }
    function renderChatForm(creds) {
        return (
            <>
                <input 
                    placeholder='Username'
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                />
                <button onClick={()=> createDirectChat(creds)}>
                    Create 
                </button>
            </>
        )
    }
    return (
        <ChatEngine 
            height="100vh"
            projectID={chatEngine.projectID}
            userName="Test1"
            userSecret="testing#123"
            renderNewChatForm={(creds)=> renderChatForm(creds)}

        />
    )
}
export default DirectChastPage;