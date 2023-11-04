import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./app.css"
import "./responsive.css"

import HomePage from "./components/pages/HomePage"
import Auth from "./components/pages/auth";
import NewUser from "./components/pages/newUser";
import CraeteServer from "./components/pages/createServer";


import RootPage from "./components/pages/rootPage"
import AddFriend from "./components/pages/addFriend";
function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" Component={RootPage}/>
                <Route path={`/:uid`} Component={HomePage} />
                <Route path="/auth" Component={Auth} />
                <Route path="/newuser" Component={NewUser} />
                <Route path="/server/new" Component={CraeteServer} />
                <Route path="/:uid/friendrequest" Component={AddFriend} />
            </Routes>
        </Router>
    )
}

export default App;
