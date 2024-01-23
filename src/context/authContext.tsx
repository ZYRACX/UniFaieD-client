import React, { createContext, useEffect, useState } from "react";
import io, {Socket} from "socket.io-client"
const UserContext = createContext<Socket | undefined>(undefined)


export default function User({ children } : {children: React.ReactNode}) {
    const [socket, setSocket] = useState<Socket>()

    useEffect(() => {
        const newSocket: Socket = io("https://organic-acorn-pqp64vp74wphj5-8000.app.github.dev/")
        setSocket(newSocket)
        // return () => newSocket.disconnect();
    }, [])
    return(
        <UserContext.Provider value={socket}>
        {children}
        </UserContext.Provider>
    )
}