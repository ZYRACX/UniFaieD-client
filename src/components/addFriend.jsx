import { useState } from "react"
export default function AddFriend({HandleClose, show}){

    return(<div className="hidden-popup popup" id="add-friend-pop-up" style={{ visibility: "visible" }}>
        <h1>Friend Request</h1>
        <input type="text" placeholder="Enter Friend's ID" />
        <a href="#" className="add-friend-btn-2">Send Request</a>
        <div className="incoming-request">
            <br />
            <h1>Incoming Request</h1>
            <div className="request 1">
                <img src="/src/img/logo/discord.png" width="40px" />
                <h4>Username 2</h4>
                <div className="btn accept-reject-btns">
                    <a href="#"  className="accept">Accept</a>
                    <a href="#"  className="reject">Reject</a>
                </div>
            </div>
            <div className="request 2">
                <img src="/src/img/logo/discord.png" width="40px" />
                <h4>Username 2</h4>
                <div className="btn accept-reject-btns">
                    <a href="#"  className="accept">Accept</a>
                    <a href="#"  className="reject">Reject</a>
                </div>
            </div>
        </div>
    </div>
    )
}
