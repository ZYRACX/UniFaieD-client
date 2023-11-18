import React, { useEffect, useRef, useState } from "react"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "../../utils/firebase/config";
export default function AddFriend() {
    const cookies = new Cookies();

    const [uid, setUid] = useState("")
    const [users, setUsers] = useState([])
    let navigate = useNavigate()
    const UsernameRef = useRef("")
    const userRef = collection(db, "user")
    const messageRef = collection(db, "message")

    const friendRequestHandler = async () => {
        let user = [];
        const userQuery = query(userRef, where("uid", "==", UsernameRef.current.value))
        if(UsernameRef.current.value === auth.currentUser.uid) return
        onSnapshot(userQuery, (snapshot) => {
            user = snapshot.docs.map(docs => ({ ...docs.data()}))
            addDoc(messageRef, {
                user_uid: [auth.currentUser.uid, user[0].uid]
            })
            console.log(user[0].uid)
        })
        setUsers(user)
    }

    const token = cookies.get('auth-token')
    useEffect(() => {
        if (!cookies.get('auth-token')) {
            navigate("/auth")
        }

        
    }, [uid, navigate, token])

    return (<div className="popup" id="add-friend-pop-up">
        <h1>Friend Request</h1>
        <input type="text" placeholder="Enter Friend's ID" ref={UsernameRef} />
        <a href={`/${uid}/friendrequest`} className="add-friend-btn-2" onClick={(event) => {
            event.preventDefault()
            friendRequestHandler()
        }}>Send Request</a>
        <div className="incoming-request">
            <br />
            <h1>Incoming Request</h1>
            <div className="request 1">
                {/* <img src="/src/img/logo/discord.png" width="40px" /> */}
                <h4>Username 2</h4>
                <div className="btn accept-reject-btns">
                    <a href="/" className="accept" onClick={(event) => {
                        event.preventDefault()
                    }}>Accept</a>
                    <a href="/" className="reject" onClick={(event) => {
                        event.preventDefault()
                    }}>Reject</a>
                </div>
            </div>
        </div>
    </div>
    )
}
