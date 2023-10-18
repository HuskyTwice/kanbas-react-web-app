import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {AiFillCheckCircle} from "react-icons/ai";

function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules;

    return (
        <div className="col">
            <div className="d-flex wd-module-buttons justify-content-end">
                <button type="button" class="btn btn-light h-20">Collapse All</button>
                <button type="button" class="btn btn-light h-20">View Progress</button>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <AiFillCheckCircle className="wd-checkmark"/> Publish All
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button type="button" class="btn btn-danger">+ Module</button>
                <button type="button" class="btn btn-light"><BiDotsVerticalRounded/></button>
            </div>
            <hr />
            <ul className="list-group">
                {
                    modules.filter((module) => module.course === courseId).map((module, index) => (
                        <li key={index} className="list-group-item wd-module-item">
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
        
    );
}

export default ModuleList;