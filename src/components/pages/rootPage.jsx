import React, { useEffect, useState } from "react"
// import { auth } from "../../utils/firebase/config"
import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth"
import Cookies from "universal-cookie"
export default function RootPage() {
        const navigate = useNavigate()
        const cookies = new Cookies();
        const [uid, setUidd] = useState("")
        
    return (<></>)
}