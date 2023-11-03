import React, {useState} from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {AiFillCheckCircle} from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux";
import {addModule, deleteModule, updateModule, setModule} from "./modulesReducer";

function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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
                <div className="m-5">
                    <li className="list-group-item wd-module-item">
                        <div className="row">
                            <div className="col wd-new-module-fields">
                                <input className="row wd-new-module-item" value={module.name}
                                    onChange={(e) => dispatch(setModule({...module, name: e.target.value}))} />
                                <textarea className="row wd-new-module-item" value={module.description}
                                    onChange={(e) => dispatch(setModule({...module, description: e.target.value}))} />
                            </div>
                            <div className="col-3">
                                <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary">Update</button>
                                <button onClick={() => dispatch(addModule({...module, course: courseId}))} className="btn btn-success">Add</button>
                            </div>
                        </div>
                    </li>
                </div>
                {
                    modules.filter((module) => module.course === courseId).map((module, index) => (
                        /* gotta make a div and put another list-group inside here */
                        <div className="m-5">
                            <li key={index} className="list-group-item wd-module-item">
                                <div className="d-flex">
                                    <h3>{module.name}</h3>
                                    <button onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger ms-auto">Delete</button>
                                    <button onClick={() => dispatch(setModule(module))} className="btn btn-success">Edit</button>
                                </div>
                                <p>{module.description}</p>
                                <p>{module._id}</p>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
        
    );
}

export default ModuleList;