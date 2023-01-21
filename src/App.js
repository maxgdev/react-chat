// import chatEngine from './chat-engine';
// import { ChatEngine } from 'react-chat-engine';
import DirectChatPage from './DirectChat';
import CEWrapper from './CEWrapper';
import CommunityChat from './CommunityChat';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Chat App with ChatEngine</h1>
      {/* <DirectChatPage/> */}
      {/* <CommunityChat /> */}
      <CEWrapper />
    </div>
  );
}

export default App;
