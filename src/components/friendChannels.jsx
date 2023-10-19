import HandshakeIcon from "../images/icons/handshake.png"
import TurboIcon from "../images/icons/turbo-engine.png"

export default function FriendChannel(){
    return(<div className="friend-channels">
    <div className="friend-channels-divider">
        <div>
            <input type="search" className="search-bar" />
        </div>
        <div className="f-t-group">
            <div className="f-group">
                <a href="#">
                    <img src={HandshakeIcon} alt="" width="30px"/>
                    <span>
                        <h4 >Friends</h4>
                    </span>
                </a>
            </div>
            <div className="t-group">
                <a href="#">
                    <img src={TurboIcon} alt="" width="30px"/>
                    <span>
                        <h4 >Turbo</h4>
                    </span>
                </a>
            </div>
        </div>
        <div className="direct-message">
            <div className="d-m-header">
                <h5><span>DIRECT MESSAGE</span>
                    <b>+</b>
                </h5>
            </div>
            <div className="d-m-list" id="dm-list">
            </div>
        </div>
    </div>
</div>)
}