import {messages} from "./Message"
import { useState, useEffect, useRef } from "react"
import { useMessages } from "./MessagesContext";
import "./ChatWindow.css"


export default function ChatWindow(){
     //const [mssges,setMessages] = useState(messages)
     const { mssges } = useMessages();
     //
     const messagesEndRef = useRef(null);
     //эффект для плавного перехода к сообщению как только список обновляется
     useEffect(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, [mssges]);
     //преобразования
     const messageList = mssges.map(msg =>
        <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="text-box">{msg.text}</div>
            <div className="time-box">{msg.timestamp.toLocaleTimeString()}</div>
            </div>
     );
     return <div>
          <div className="message-list">{messageList}</div>
          <div ref={messagesEndRef}></div>
          </div>


}



//проба пера
