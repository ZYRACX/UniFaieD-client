import React, { useEffect, useRef, useState } from "react";
// import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom";


import "./newUser.css"
// import { db, auth } from "../../utils/firebase/config";



export default function NewUser() {
    const navigate = useNavigate();
    const username = useRef("")
    // const DBref = collection(db, "user")
    const [currentUserUid, setCurrentUserUid] = useState("")
    
    // async function handleSubmit() {
    //     await addDoc(DBref, {
    //         username: username.current.value,
    //         CreatedAt: serverTimestamp(),
    //         uid: currentUserUid
    //     })
    //     navigate("/");
    // }

    // useEffect(() => {
    //     setCurrentUserUid(auth.currentUser.uid)
    //     const queryUser = query(DBref, where("uid", "==", currentUserUid))
    //     onSnapshot(queryUser, (snapshot) => {
    //         if (!snapshot.empty && snapshot.docs[0].exists()) {
    //             console.log('already exist')
    //             navigate('/');
    //         }
    //     })
    // }, [currentUserUid, DBref, navigate])
    return (
        <div className="new-user">
            <input type="text" name="username" ref={username} />
            <button onClick={(event) => {
                event.preventDefault()
                // handleSubmit()
            }}>submit</button>
        </div>
    )
}