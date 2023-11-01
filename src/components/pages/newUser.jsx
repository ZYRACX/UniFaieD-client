import React, { useEffect, useRef } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useNavigate } from "react-router-dom";


import "./newUser.css"
import { db, auth } from "../../utils/firebase/config";
import { onAuthStateChanged } from "firebase/auth";



export default function NewUser() {
    const navigate = useNavigate();
    const username = useRef("")
    const DBref = collection(db, "user")
    async function handleSubmit() {
        await addDoc(DBref, {
            username: username.current.value,
            CreatedAt: serverTimestamp(),
            uid: auth.currentUser.uid
        })

        navigate("/");
    }

    useEffect(() => {

    }, [])
    return (
        <div className="new-user">
            <input type="text" name="username" ref={username} />
            <button onClick={(event) => {
                event.preventDefault()
                handleSubmit()
            }}>submit</button>
        </div>
    )
}