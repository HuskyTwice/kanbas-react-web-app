import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import "./index.css";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);
    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            <div className="d-flex justify-content-end align-items-center">
                <AiFillCheckCircle className="wd-check-mark"/>
                <h5 className="wd-published">Published</h5>
                <button type="button" class="btn btn-light"><BiDotsVerticalRounded/></button>
            </div>
            <hr/>
            <h5>Assignment Name</h5>
            <input value={assignment.title} className="form-control mb-2" />
            <hr className="wd-lighter-inner-line"/>
            <div className="d-flex justify-content-end align-items-center">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light me-1">
                    Cancel
                </Link>
                <button onclick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
            <hr/>
        </div>
    );
}

export default AssignmentEditor;