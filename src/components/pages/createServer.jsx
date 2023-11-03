import React, { useEffect, useRef } from 'react'
import Cookies from "universal-cookie"
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { auth, db } from "../../utils/firebase/config";
import "./createServer.css"

export default function CraeteServer() {
    const serverName = useRef("")
    const navigate = useNavigate()
    const cookies = new Cookies();
    const token = cookies.get("auth-token")
    const serverRef = collection(db, "server")

    async function createServerHandler() {
        if (!token) return navigate("/auth")
        if(!serverName || serverName === "") return
        try {
    await addDoc(serverRef, {
        name: serverName.current.value,
        owner: auth.currentUser.uid,
        CreatedAt: serverTimestamp()
    })
    console.log("Successfully Server Created.")
    navigate('/')
        } catch (error) {
            console.error(error)
        }
    }





    useEffect(() => {
        if (!token) return navigate("/auth")
    }, [token, navigate])
    return (<div className="create-server">
        <h1>Craete Your Server</h1>
        <form className="form">
            <input type='text' placeholder='Name of the server' className="input-field" ref={serverName} />
            <button onClick={event => {
                event.preventDefault()
                createServerHandler()
            }}>Create</button>
        </form>
    </div>
    )
}