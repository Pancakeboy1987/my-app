import { useState } from "react";
import './ChatInput.css'


export default function ChatInput(){
    const [inputText, setInputText] = useState('')
    const [status,setStatus] = useState('typing')
    const [objects, setObjects] = useState([])



    function handleTextareaChange(e) {
        setInputText(e.target.value);
      }

    function handeSubmit(e){
        e.preventDefault();
        if (inputText.trim()===''){
            return
        }

        const myNewMessage = {
            id:Date.now(),
            text: inputText,
            date: new Date().toLocaleTimeString(),
        }
        
        setObjects([...objects, myNewMessage])

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
