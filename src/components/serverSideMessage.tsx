export default function ServerSideMessage({ name, messageContent }) {
    const D = new Date()
    const hour = D.getHours();
    const min = D.getMinutes();

    return (<div>
        <div className="server-message">
            <span></span>
            <h4>{name} | {hour}:{min}</h4>
            server:{messageContent}
        </div>
    </div>
    )
}