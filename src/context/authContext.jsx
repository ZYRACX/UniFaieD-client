import { createContext, useEffect, useState } from "react";
import io from "socket.io-client"
const UserContext = createContext()


export default function User({children}) {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io("https://organic-acorn-pqp64vp74wphj5-8000.app.github.dev/")
        setSocket(newSocket)
        return () => newSocket.disconnect();
    }, [])
    return(
        <UserContext.Provider value={socket}>
        {children}
        </UserContext.Provider>
    )
}