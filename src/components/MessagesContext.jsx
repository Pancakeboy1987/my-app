//в файле будет реализация контекста который позволяет всем необходимым файлам брать функцию
//с добавлением сообщения в список

import { createContext, useContext, useState } from "react";
import { messages as initialMessages} from "./Message";

const MessagesContext = createContext(null)


export default function MessagesProvider({children}){
    const [mssges,setMessages] = useState(initialMessages)

    function addMessage(text,sender="me"){
        const myNewMessage = {
            id:Date.now()+11,
            text,
            timestamp: new Date(),
            sender,
        };
        setMessages([...mssges,myNewMessage ]);
    }

    return(
        <MessagesContext.Provider value={{ mssges, addMessage }}>
        {children}
        </MessagesContext.Provider>
    );
}

export function useMessages() {
    const ctx = useContext(MessagesContext);
    if (!ctx) throw new Error("useMessages must be used within a MessagesProvider");
    return ctx;
  }