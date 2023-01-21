import React from 'react';
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'
import chatEngine from './chat-engine';

const CommunityChat = () => {
    <ChatEngineWrapper>
        <ChatSocket
        height="100vh"
            projectID={chatEngine.projectID}
            chatID="142084"
            chatAccessKey="LZ5s9c0YNM01JrZwA7hi"
            senderUsername="Test One"
        />
        {/* <ChatSocket
            projectID={chatEngine.projectID}
            chatID="142105"
            SenderUsername="Test One"
            chatAccessKey="testing#123"
        /> */}
        {/* <ChatFeed activeChat="142084" /> */}
    </ChatEngineWrapper>
}
export default CommunityChat;