import React, { useEffect, useRef } from 'react'
import Cookies from "universal-cookie"
import { useNavigate } from 'react-router-dom';
// import { addDoc, collection, serverTimestamp } from "firebase/firestore"
// import { auth, db } from "../../utils/firebase/config";
import "./createServer.css"

export default function CraeteServer() {
    const serverName = useRef("")
    const navigate = useNavigate()
    const cookies = new Cookies();

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