import { useEffect, useState } from "react"

import { query,where,onSnapshot, collection } from "firebase/firestore"
import { auth, db } from "../utils/firebase/config"
export default function Room({imageSrc, username}) {
    console.log(username != auth.currentUser.uid)
    const [users, setUsers] = useState([])
    const [user,setUser] = useState("")
    
    // Get all users in the room
    const userRef = collection(db, "user")
    // console.log(auth.currentUser)
    // if(username !== auth.currentUser.uid){
    //     setUser(username)
    // }


    // console.log(users)
    useEffect(() => {
        
        try{
            const queryUser = query(userRef, where("uid", "==",user))
            onSnapshot(queryUser, (snapshot) => {
                const user = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
                setUsers(user)
            })
        }catch(error){
            console.log(error)
        }
    }, [username, imageSrc])
    return (
    <div className="d-m-list" id="dm-list">
    <div className="user-btn">
        <div className="user-image">
            <br />
            <img src={imageSrc} alt="" />
        </div>
        <div className="user-userid">
            <br />
            <h2>{username}</h2>
        </div>
    </div>
    </div>
    )
}