import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddFriend from "./addFriend";
import Header from "../header";
import ServerLogo from "../../images/logo/discord.png"
import PlusIcon from "../../images/icons/plus.png"
import ServerIcon from "../server";
import FriendIcon from "../../images/icons/handshake.png"
import TurboIcon from "../../images/icons/turbo-engine.png"


import { Link } from "react-router-dom"
import Room from "../room"


function HomePage() {
    const navigate = useNavigate();
    const [value, setValue] = useState("")
    const [serverMessage, setServermessage] = useState("")
    const [isServer, setIsServer] = useState(false)
    const [username, setUsername] = useState("")
    const [uid, setUid] = useState("")
    const [userArray, setUserarray] = useState([])
    const [servers, setServers] = useState([])
    const cookies = new Cookies();
    const handleSubmit = async () => {
        if (!value || value == "") return
    }

    const token = cookies.get("auth-token")
    
    return (<>

        <div className="container">
            <div className="left-side-icons">
                <Header />
                <hr width="40px" color="#738287" />
                <div className="left-side-server-icons">
                    {/* {servers.map((server, index) => <ServerIcon imageSrc={ServerLogo} key={index} />)} */}
                    <ServerIcon imageSrc={PlusIcon} href="/server/new" />
                </div>
            </div>
            <div className="main-section">
                <div className="main-divider">
                    <div className="friend-channels">
                        <div className="friend-channels-divider">
                            <div>
                                <input type="search" className="search-bar" />
                            </div>
                            <div className="f-t-group">
                                <div className="f-group">
                                    <a href="/">
                                        <img src={FriendIcon} alt="" width="30px" />
                                        <span>
                                            <h4>Friends</h4>
                                        </span>
                                    </a>
                                </div>
                                <div className="t-group">
                                    <a href="/">
                                        <img src={TurboIcon} alt="" width="30px" />
                                        <span>
                                            <h4>Turbo</h4>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="direct-message">
                                <div className="d-m-header">
                                    <h5>
                                        <span>DIRECT MESSAGE</span>
                                        <b>+</b>
                                    </h5>
                                </div>
                                {/* {userArray.map((room, index) => {
                                    return <Room key={index} imageSrc={ServerLogo} username={room["user_uid"][1]}/>
                                    // return <div className="d-m-list" id="dm-list" key={index}>
                                    //     <div className="user-btn">
                                    //         <div className="user-image">
                                    //             <img src={ServerLogo} alt="" />
                                    //         </div>
                                    //         <div className="user-userid">
                                    //             <h2>{room["user_uid"][1]}</h2>
                                    //         </div>
                                    //     </div>
                                    // </div>;
                                })} */}
                                {/* <div className="d-m-list" id="dm-list">
                    <div className="user-btn">
                        <div className="user-image">
                            <br />
                            <img src={UserPic} alt="" />
                        </div>
                        <div className="user-userid">
                            <br />
                            <h2>User 1</h2>
                        </div>
                    </div>
                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="main-friend-chat">
                        <div className="f-header">
                            <img src={FriendIcon} alt="logo" width="30px" />
                            <h3>Friends</h3>
                            <div className="nav-btn">
                                <a href="/" className="all-friend-btn" onClick={(event) => {
                                    event.preventDefault()
                                }}>All</a>
                                <Link to={`/${uid}/friendrequest`} className="add-friend-btn" >Add Friends</Link>
                                <a href="/" onClick={(event) => {

                                }}>logout</a>
                            </div>
                        </div>
                        <div className="no-chat-open">
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