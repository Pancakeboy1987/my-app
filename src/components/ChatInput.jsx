import { useState } from "react";
import './ChatInput.css'

export default function ChatInput(){
    const [text, setText] = useState('')
    const [status,setStatus] = useState('typing')


    function handleTextareaChange(e) {
        setText(e.target.value);
      }



      return(
        <div className="my-text-block">
            <form >
                <textarea className="text-form" value={text}
                    onChange={handleTextareaChange} />
                <button className='text-button'>
                    s
                </button>
            </form>
        </div>
      )
}