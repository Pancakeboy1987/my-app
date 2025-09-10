import ChatWindow from './ChatWindow'
import ChatInput from "./ChatInput";
import './App.css';

export default function ChatRender(){
    return(
        <>
            <div className="chat-block">
              <ChatWindow/>
              
            </div>

            <div className="typing-box">
              <ChatInput/>
            </div>
        </>
    )
}