import { useState, useContext } from "react";
import { useMessages } from "./MessagesContext";
import './ChatInput.css'



///проблема в том что новые объекты есть в стейте но не передаются в виндоу
export default function ChatInput({mssges,setMessages}){
    const [inputText, setInputText] = useState('')
    const [status,setStatus] = useState('typing')
    const { addMessage } = useMessages();



    function handleTextareaChange(e) {
        setInputText(e.target.value);
      }

    function handleSubmit(e){
        e.preventDefault();
        if (inputText.trim()===''){
            return
        }
        addMessage(inputText,"me")

        setInputText('')

    }



      return(
        <div className="my-text-block">
            <form onSubmit={handleSubmit}>
                <input type="text" className="text-form"
                 value={inputText}
                onChange={handleTextareaChange}
                placeholder="type text..." />
                <button className='text-button' type="submit">
                    s
                </button>
            </form>
        </div>
      )
}
