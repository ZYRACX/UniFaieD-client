import React, { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
// import {  signInWithPopup } from "firebase/auth"
import Cookies from "universal-cookie"
// import { auth, googleProvider } from "../../utils/firebase/config"
import "./auth.css"


export default function Auth () {
    // useStates
    const email = useRef("")
    const password = useRef("")

    const navigate = useNavigate();
    const cookies = new Cookies()

    const handleForm = () => {
    }

    // const signWithGoogle = () => {
    //     signInWithPopup(auth, googleProvider).then((response) => {
    //         console.log(response)
    //         cookies.set("auth-token", response.user.refreshToken)
    //         navigate("/newuser")
    //     })
    // }

    const token = cookies.get("auth-token")


    // useEffect(() => {
    //     // if the client already have a cookie called token, then they will be redirected to '/'
    //     if (token) return navigate("/")
    // }, [token])
    return (
        <div className="container-auth">
            <h1>Login / Sign Up</h1>
            <form>
                <input type="email" name="email" placeholder="Enter Email"
                    ref={email} className="user-input" /><br />
                <input type="password" name="pass" placeholder="Enter password"
                    ref={password} className="user-input" /><br />

                <button type="submit" onClick={handleForm()}>Login</button>
                <button type="submit" onClick={(event) =>{
                    event.preventDefault()
                    // signWithGoogle()
                    }}> Sign With google</button>
            </form>
        </div>
    )
}