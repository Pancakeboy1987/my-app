import { useState } from "react";
import './ChatInput.css'


export default function ChatInput({mssges,setMessages}){
    const [inputText, setInputText] = useState('')
    const [status,setStatus] = useState('typing')



    function handleTextareaChange(e) {
        setInputText(e.target.value);
      }

    function handeSubmit(e){
        e.preventDefault();
        if (inputText.trim()===''){
            return
        }

        const myNewMessage = {
            id:Date.now()+11,
            text: inputText,
            timestamp: new Date().toLocaleTimeString(),
            sender:"me"
        }
        
        setMessages([...mssges,myNewMessage])

        setInputText('')

    }



      return(
        <div className="my-text-block">
            <form >
                <input type="text" className="text-form"
                 value={inputText}
                onChange={handleTextareaChange}
                placeholder="type text..." />
                <button className='text-button'>
                    s
                </button>
            </form>
        </div>
      )
}
