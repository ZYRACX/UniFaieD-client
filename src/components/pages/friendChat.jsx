export default function FriendChat() {
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
                        <ChatBox Component={isServer ? ServerSideMessage : ClientSideMessage}
                            messageContent={serverMessage}
                            name={"adad"} />
                        <div className="chat-input">
                            <input type="text" placeholder="Enter Text" id="message-input"
                                onChange={(e) => { setValue(e.target.value) }} value={value}
                            />
                            <a href="/" id="send-message-btn"
                                onClick={(event) => {
                                    event.preventDefault()
                                    const clientMessage = value
                                    if (clientMessage.length > 0) {
                                        // socket.emit("send-message", clientMessage)
                                        // append(`Me`, clientMessage, "client")
                                        handleSubmit()
                                        setValue("")
                                    }
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