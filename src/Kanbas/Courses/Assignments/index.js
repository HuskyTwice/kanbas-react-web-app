import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {AiOutlinePlus, AiFillCheckCircle} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import "./index.css";

function Assignments() {
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    return (
        <div className="col">
            <div className="d-flex justify-content-between wd-assignment-buttons">
                <div className="flex-start">
                    <input type="text" className="p-2 wd-assignment-searchbar" placeholder="Search for Assignment"/>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" class="btn btn-light h-20">+ Group</button>
                    <button type="button" class="btn btn-danger">+ Assignment</button>
                    <button type="button" class="btn btn-light"><BiDotsVerticalRounded/></button>
                </div> 
            </div>
            <hr/>
            <ul className="list-group">
                <li className="list-group-item wd-assignment-items-header">
                    <h5 className="d-flex m-0 justify-content-center">ASSIGNMENTS</h5>
                    <h6 className="m-1 p-0 ms-auto">40% of Total</h6>
                    <button type="button" className="btn p-0"><AiOutlinePlus/></button>
                    <button type="button" className="btn p-0"><BiDotsVerticalRounded/></button>
                </li>
                {
                    courseAssignments.map((assignment) => (
                        <Link 
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-itm d-flex align-items-center wd-assignment-item">
                                <FiEdit className="wd-edit-icon"/>
                                <h5 className="m-0">{assignment.title}</h5>
                                <AiFillCheckCircle className="ms-auto wd-assignment-check-icon"/>
                                <BiDotsVerticalRounded className="wd-assignment-threedots-icon"/>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Assignments;