import React from "react";
import './main.css';
import MainMidComponent from "./MidMainComponent";
import RightMainComponent from "./RightMainComponent";

export default function LeftMainComponent() {
    return(
        <div className="main">
            <div className="left-component">
                left component
            </div>
            <div className="mid-component">
                <MainMidComponent />
            </div>
            <div className="right-component">
                <RightMainComponent />
            </div>
        </div>
    )
}