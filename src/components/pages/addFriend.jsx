import React, { useEffect, useRef, useState } from "react"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "../../utils/firebase/config";
export default function AddFriend(){
    const [uid, setUid] = useState("")
    let navigate = useNavigate()
    const UsernameRef = useRef("")
    
    onAuthStateChanged(auth, user => {
        setUid(user.uid)
    })

    const cookies = new Cookies();

    useEffect(()=> {
        if(!cookies.get('auth-token')){
            navigate("/auth")
            }
    }, [uid])
    return(<div className="popup" id="add-friend-pop-up">
        <h1>Friend Request</h1>
        <input type="text" placeholder="Enter Friend's ID" ref={UsernameRef} />
        <a href="/" className="add-friend-btn-2" onClick={(event) => {
                        event.preventDefault()
                    }}>Send Request</a>
        <div className="incoming-request">
            <br />
            <h1>Incoming Request</h1>
            <div className="request 1">
                {/* <img src="/src/img/logo/discord.png" width="40px" /> */}
                <h4>Username 2</h4>
                <div className="btn accept-reject-btns">
                    <a href="/"  className="accept" onClick={(event) => {
                        event.preventDefault()
                    }}>Accept</a>
                    <a href="/"  className="reject" onClick={(event) => {
                        event.preventDefault()
                    }}>Reject</a>
                </div>
            </div>
            <div className="request 2">
                {/* <img src="/src/img/logo/discord.png" width="40px" /> */}
                <h4>Username 2</h4>
                <div className="btn accept-reject-btns">
                    <a href="/"  className="accept" onClick={(event) => {
                        event.preventDefault()
                    }}>Accept</a>
                    <a href="/"  className="reject" onClick={(event) => {
                        event.preventDefault()
                    }}>Reject</a>
                </div>
            </div>
        </div>
    </div>
    )
}
