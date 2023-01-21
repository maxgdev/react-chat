import chatEngine from './chat-engine';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Chat App with ChatEngine</h1>
      <ChatEngine 
        height="100vh"
        projectID={chatEngine.projectID}
        userName="Test1"
        userSecret="testing#123"
      
      />
    </div>
  );
}

export default App;
