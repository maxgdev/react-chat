import React from 'react';
import { ChatEngineWrapper, ChatSocket, ChatFeed, ChatList, ChatSettings } from 'react-chat-engine'
import { Col } from 'react-grid-system'
import chatEngine from './chat-engine';

const CEWrapper = () => {
    return (
        <ChatEngineWrapper>
            <ChatSocket
                projectID={chatEngine.projectID}
                chatID='142084'
                chatAccessKey="LZ5s9c0YNM01JrZwA7hi"
                senderUsername='Test One'
            />
            <Col xs={0} sm={3}>
                <ChatList />
            </Col>

            <Col xs={12} sm={6}>
            <ChatFeed activeChat='142084' />
            </Col>

            <Col xs={0} sm={3}>
                <ChatSettings />
            </Col>
           
        </ChatEngineWrapper>
    )

}
export default CEWrapper;