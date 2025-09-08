import {messages} from "./Message"
import { useState } from "react"
import { useMessages } from "./MessagesContext";
import "./ChatWindow.css"


export default function ChatWindow(){
     //const [mssges,setMessages] = useState(messages)
     const { mssges } = useMessages();
     //преобразования
     const messageList = mssges.map(msg =>
        <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="text-box">{msg.text}</div>
            <div className="time-box">{msg.timestamp.toLocaleTimeString()}</div>
            </div>
     );
     return <div className="message-list">{messageList}</div>


}



//проба пера
