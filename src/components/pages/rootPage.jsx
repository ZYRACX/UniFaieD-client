import React, { useEffect, useState } from "react"
import { auth } from "../../utils/firebase/config"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"
import Cookies from "universal-cookie"
export default function RootPage() {
        const navigate = useNavigate()
        const cookies = new Cookies();
        const [uid, setUidd] = useState("")
        try {
            onAuthStateChanged(auth, (user) => {
                // console.log(user)
                setUidd(user.uid);
                navigate(`/${uid}`)
            })
        } catch (error) {
            console.error(error)
        }
        const token = cookies.get("auth-token")
        useEffect(() => {
            if (!token) return navigate("/auth")
    
        }, [token, navigate,uid])
        useEffect(() => {
            if(uid){
                navigate(`/${uid}`)
            }
        }, [navigate, uid])
        
    return (<></>)
}