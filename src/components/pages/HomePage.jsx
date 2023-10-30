import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"

import AddFriend from "../addFriend";
import Header from "../header";
import ServerLogo from "../../images/logo/discord.png"
import ServerIcon from "../server";
import FriendIcon from "../../images/icons/handshake.png"
import FriendChannel from "../friendChannels";
import SendIcon from "../../images/icons/send.png"
import { logout } from "../../utils/Logout";
import ChatBox from "../chatBox";

import ServerSideMessage from "../serverSideMessage";
import ClientSideMessage from "../clientSideMessage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase/config";


const socket = io("http://localhost:8000/")
let name = null;
const cookies = new Cookies();

socket.on("connect", () => {
    console.log(socket.id)
})

function HomePage() {
    const navigate = useNavigate();

    const [value, setValue] = useState("")
    const [serverMessage, setServermessage] = useState("")
    const [isServer, setIsServer] = useState(false)
    const [username, setUsername] = useState("")

    onAuthStateChanged(auth, user => {
        setUsername(user.displayName)
    })
    socket.on('user-joined', name => {
        setServermessage(`${name} is joined.`)
    })

    const token = cookies.get("auth-token")
    useEffect(()=> {
        if(!token) return navigate("/auth")

    },[token])

    useEffect(() => {
        setIsServer(true)
    }, [serverMessage, isServer])

    return (<>
        <AddFriend />
        <div className="container">
            <div className="left-side-icons">
                <Header />
                <hr width="40px" color="#738287" />
                <div className="left-side-server-icons">
                    <ServerIcon imageSrc={ServerLogo} />
                    <ServerIcon imageSrc={ServerLogo} />
                    <ServerIcon imageSrc={ServerLogo} />
                    <ServerIcon imageSrc={ServerLogo} />
                </div>
            </div>
            <div className="main-section">
                <div className="main-divider">
                    <FriendChannel />
                    <div className="main-friend-chat">
                        <div className="f-header">
                            <img src={FriendIcon} alt="logo" width="30px" />
                            <h3>Friends</h3>
                            <div className="nav-btn">
                                <a href="#" className="all-friend-btn">All</a>
                                <a href="#" className="add-friend-btn">Add Friends</a>
                                <a href="#" >logout</a>
                            </div>
                        </div>
                        <div className="f-chat">
                            <div className="chat-open">
                                <div className="chat-box">
                                    <div className="chat-box-divider">
                                        <div className="chat-userid">
                                            <img src={ServerLogo} alt="" width="40" />
                                            <h3>{username}</h3>
                                        </div>
                                        <hr />
                                        <ChatBox Component={isServer ? ServerSideMessage : ClientSideMessage}
                                            messageContent={serverMessage}
                                            name={"adad"} />
                                        <div className="chat-input">
                                            <input type="text" placeholder="Enter Text" id="message-input" 
                                            onChange={(e) => { setValue(e.target.value) }} value={value} 
                                            />
                                            <a href="#" id="send-message-btn" 
                                            onClick={(event) => {
                                                event.preventDefault()
                                                if (!localStorage.getItem("access-name-if")) {
                                                    logout();
                                                } else {
                                                    const clientMessage = value
                                                    if (clientMessage.length > 0) {
                                                        socket.emit("send-message", clientMessage)
                                                        // append(`Me`, clientMessage, "client")
                                                        setValue("")
                                                    }
                                                }
                                            }}>
                                                <img src={SendIcon} width="20px" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="current-work-tab">
                        <div className="c-w-header">
                            <h2>Currently Working</h2>
                        </div>
                        <div className="c-w-main">
                            <h1>Coming Soon...</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default HomePage