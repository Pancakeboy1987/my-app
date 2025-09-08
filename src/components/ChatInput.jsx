import { useState } from "react";

export default function ChatInput(){
    const [text, setText] = useState('')
    const [status,setStatus] = useState('typing')


    function handleTextareaChange(e) {
        setText(e.target.value);
      }



      return(
        <div className="my-text-block">
            <form>
                <textarea value={text}
                    onChange={handleTextareaChange} />
                <button>
                    s
                </button>
            </form>
        </div>
      )
}