import {messages} from "./Message"
import { useState } from "react"



export default function ChatWindow(){
     const [mssges,setMessages] = useState(messages)

     //преобразования
     const messageList = mssges.map(msg =>
        <div key={msg.id} className={`message ${msg.sender}`}>
               <span>{msg.text}</span>
            <small>{msg.timestamp.toLocaleString()}</small> 
            </div>
     );
     return <div>{messageList}</div>



//     function MessageList({messages}){
//         return(
//             <div className="message-list">  // Для скролла
//           {messages.map((msg) => (
//             <div key={msg.id} className={`message ${msg.sender}`}>
//               <span>{msg.text}</span>
//               <small>{msg.timestamp.toLocaleTimeString()}</small>  // Отображение времени
//             </div>
//           ))}
//         </div>
//         )
//     }

}

//проба пера
