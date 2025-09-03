import './User.css'

export default function User(props) {
    return (
        <div className="user-card">
            
            <div className="img-box">
                <img src={props.img} 
            alt="user-img" className="avatar"/>
            </div>

            <div className="message-box">
                <h4>{props.name}</h4>
                <h5>{props.lastmessage}</h5>
            </div>

            <div></div>





            <h6>{props.time}</h6>

        </div>
    )
}