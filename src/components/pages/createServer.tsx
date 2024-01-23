import {useRef } from 'react'
// import { useNavigate } from 'react-router-dom';
import "./createServer.css"

export default function CraeteServer() {
    const serverName = useRef<HTMLInputElement>(null)
    // const navigate = useNavigate()

    return (<div className="create-server">
        <h1>Craete Your Server</h1>
        <form className="form">
            <input type='text' placeholder='Name of the server' className="input-field" ref={serverName} />
            <button onClick={event => {
                event.preventDefault()
                // createServerHandler()
            }}>Create</button>
        </form>
    </div>
    )
}