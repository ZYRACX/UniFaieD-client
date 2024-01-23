import { useState } from "react"

import SendIcon from "../../images/icons/send.png"
import ServerLogo from "../../images/logo/discord.png";
import ChatBox from "../chatBox";
export default function FriendChat() {
    const [username, setUsername] = useState<string>("")
    const [uid, setUid] = useState<string>()


    return (
        <div className="f-chat">
            <div className="chat-open">
                <div className="chat-box">
                    <div className="chat-box-divider">
                        <div className="chat-userid">
                            <img src={ServerLogo} alt="" width="40" />
                            <h3>{username}</h3>
                        </div>
                        <hr />
                        {/* <ChatBox Component={isServer ? ServerSideMessage : ClientSideMessage}
                            messageContent={serverMessage}
                            name={"adad"} /> */}
                        <div className="chat-input">
                            <input type="text" placeholder="Enter Text" id="message-input"
                            />
                            <a href="/" id="send-message-btn"
                                onClick={(event) => {
                                    event.preventDefault()
                                    // const clientMessage = value
                                    // if (clientMessage.length > 0) {
                                    // }
                                }}>
                                <img src={SendIcon} width="20px" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}