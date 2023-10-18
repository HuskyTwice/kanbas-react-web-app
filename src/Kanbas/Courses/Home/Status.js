import React from "react";
import "./index.css";
import {TbFileImport, TbTableImport} from "react-icons/tb";
import {BiTargetLock} from "react-icons/bi";
import {GiHistogram} from "react-icons/gi";
import {BsMegaphone, BsBell} from "react-icons/bs";
import {PiNumberCircleOneFill, PiNumberCircleTwoFill} from "react-icons/pi";
import {GrFormClose} from "react-icons/gr";
import "./index.css"

function Status() {
    return (
        <div className="wd-status-board">
            <button className="btn btn-light wd-btn-container" type="button"><TbFileImport/> Import Existing Content</button>
            <button className="btn btn-light wd-btn-container" type="button"><TbTableImport/> Import from Commons</button>
            <button className="btn btn-light wd-btn-container" type="button"><BiTargetLock/> Choose Home Page</button>
            <button className="btn btn-light wd-btn-container" type="button"><GiHistogram/> View Course Stream</button>
            <button className="btn btn-light wd-btn-container" type="button"><BsMegaphone/> New Announcement</button>
            <button className="btn btn-light wd-btn-container" type="button"><GiHistogram/> New Analytics</button>
            <button className="btn btn-light wd-btn-container" type="button"><BsBell/> View Course Notifications</button>
            
            <h5 className="mt-3">To Do</h5>
            <hr className="m-0"/>
            <div className="d-flex wd-todo1">
                <div className="d-flex align-items-center">
                    <PiNumberCircleOneFill className="wd-hw-order-icon"/>
                    <div className="p-2 wd-hw">
                        <h5 className="wd-hw-title">Grade A1 - ENV + HTML</h5>
                        <h6 className="wd-hw-score-due">100 points • Sep 18 at 11:59pm</h6>
                    </div>
                </div>
                <button className="wd-close-button" type="button"><GrFormClose className="wd-close-button-icon"/></button>
            </div>
            <div className="d-flex wd-todo1">
                <div className="d-flex align-items-center">
                    <PiNumberCircleTwoFill className="wd-hw-order-icon"/>
                    <div className="p-2 wd-hw">
                        <h5 className="wd-hw-title">Grade A2 - CSS + BOOTSTRAP</h5>
                        <h6 className="wd-hw-score-due">100 points • Sep 18 at 11:59pm</h6>
                    </div>
                </div>
                <button className="wd-close-button" type="button"><GrFormClose className="wd-close-button-icon"/></button>
            </div>
            
        </div>
    )
}

export default Status;