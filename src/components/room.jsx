export default function Room({imageSrc, username}) {
    
    // Get all users in the room

        
    return (
    <div className="d-m-list" id="dm-list">
    <div className="user-btn">
        <div className="user-image">
            <br />
            <img src={imageSrc} alt="" />
        </div>
        <div className="user-userid">
            <br />
            <h2>{username}</h2>
        </div>
    </div>
    </div>
    )
}