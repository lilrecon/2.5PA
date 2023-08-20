import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Dolphin from "./Dolphin";
import Page1 from "./Page1";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/dolphin">Dolphin</NavLink></li>
                        <li><NavLink to="/page1">Page1</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/dolphin" element={<Dolphin />}/>
                            <Route path="/page1" element={<Page1/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;