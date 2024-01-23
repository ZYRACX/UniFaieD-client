import { useEffect, useState } from "react"

export default function ChatBox(props){
    const { Component, name,  messageContent } = props
    
    const[message, NewMessage] = useState("")

    useEffect(()=>{
        NewMessage(messageContent)
    },[messageContent])
    return(
        <div className="chat-monitor" id="chat-m-box" >
                <Component name={name} messageContent={message} />
        </div>
    )
}