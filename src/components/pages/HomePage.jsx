import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from "firebase/firestore"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddFriend from "../addFriend";
import Header from "../header";
import ServerLogo from "../../images/logo/discord.png"
import PlusIcon from "../../images/icons/plus.png"
import ServerIcon from "../server";
import FriendIcon from "../../images/icons/handshake.png"
import FriendChannel from "../friendChannels";
import SendIcon from "../../images/icons/send.png"

import ChatBox from "../chatBox";

import ServerSideMessage from "../serverSideMessage";
import ClientSideMessage from "../clientSideMessage";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase/config";



function HomePage() {
    const navigate = useNavigate();
    const [value, setValue] = useState("")
    const [serverMessage, setServermessage] = useState("")
    const [isServer, setIsServer] = useState(false)
    const [username, setUsername] = useState("")
    const [uid, setUid] = useState("")
    const [servers, setServers] = useState([])
    const userRef = collection(db, "user")
    const serverRef = collection(db, "server")
    onAuthStateChanged(auth, user => {
        setUsername(user.displayName)
        setUid(user.uid)
    })
    const cookies = new Cookies();

    const handleSubmit = async () => {
        if (!value || value == "") return
    }

    const token = cookies.get("auth-token")
    useEffect(() => {
        if (!token) return navigate("/auth")

    }, [token])

    useEffect(() => {
        let servers

        // const queryUser = query(userRef, where("uid", "==", uid))
        // onSnapshot(queryUser, (snapshot) => {
        //     snapshot.forEach((doc) => {
        //     })
        // })

        const queryServer = query(serverRef, where("owner", "==", uid))
        onSnapshot(queryServer, (snapshot) => {
            servers = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setServers(servers)
        })
        // setIsServer(true)
    }, [serverMessage, isServer, uid])

    return (<>
        <AddFriend />
        <div className="container">
            <div className="left-side-icons">
                <Header />
                <hr width="40px" color="#738287" />
                <div className="left-side-server-icons">
                    {servers.map((server, index) => <ServerIcon imageSrc={ServerLogo} key={index} />)}
                    <ServerIcon imageSrc={PlusIcon} href="/server/new" />
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
                        <div class="no-chat-open">
                                <span>
                                    <h1>Open a chat</h1>
                                </span>
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