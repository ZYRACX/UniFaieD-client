import { useEffect, useRef, useState } from "react"
// import Cookies from "universal-cookie"
import { NavigateFunction, useNavigate } from "react-router-dom"
export default function AddFriend() {

    const [uid] = useState<string>()
    const navigate:NavigateFunction = useNavigate()
    const UsernameRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
    }, [uid, navigate])

    return (<div className="popup" id="add-friend-pop-up">
        <h1>Friend Request</h1>
        <input type="text" placeholder="Enter Friend's ID" ref={UsernameRef} />
        <a href={`/${uid}/friendrequest`} className="add-friend-btn-2" onClick={(event) => {
            event.preventDefault()
            // friendRequestHandler()
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
