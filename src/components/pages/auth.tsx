import { useRef } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
// import Cookies from "universal-cookie"
import "./auth.css"


export default function Auth () {
    // useStates
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const navigate:NavigateFunction = useNavigate();
    // const cookies = new Cookies()

    const handleForm = () => {
    }

    return (
        <div className="container-auth">
            <h1>Login / Sign Up</h1>
            <form>
                <input type="email" name="email" placeholder="Enter Email"
                    ref={email} className="user-input" /><br />
                <input type="password" name="pass" placeholder="Enter password"
                    ref={password} className="user-input" /><br />

                <button type="submit" onClick={() => handleForm()}>Login</button>
                <button type="submit" onClick={(event) =>{
                    event.preventDefault()
                    // signWithGoogle()
                    }}> Sign With google</button>
            </form>
        </div>
    )
}