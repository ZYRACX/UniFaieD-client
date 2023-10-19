
export default function ClientSideMessage({name, messageContent}){
    const D = new Date()
    const hour = D.getHours();
    const min = D.getMinutes();
    
    return(<div>
<div className="chat-user-id">
                    <span></span>
                    <h4>{name} | {hour}:{min}</h4>
                    client:{messageContent}
                </div>
    </div>)
}
