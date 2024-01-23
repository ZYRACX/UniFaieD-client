import React, { useEffect, useRef, useState } from "react";
// import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom";


import "./newUser.css"
// import { db, auth } from "../../utils/firebase/config";



export default function NewUser() {
    const navigate = useNavigate();
    const username = useRef("")
    
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