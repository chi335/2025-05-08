import React, { useState } from "react";
import Toolbar from "./Toolbar";
function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    constonClickLogin = () => {
        setIsLoggedIn(true);
    };
    constonClickLogout = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>소플과함께하는리액트공부!</div>
        </div>
    );
}
export default LandingPage;