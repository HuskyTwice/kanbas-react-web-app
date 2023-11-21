import React, {useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
// import db from "../../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {addAssignment, updateAssignment, selectAssignment, setAssignments} from "../assignmentsReducer";
import * as client from "../client";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const {courseId} = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // This module controls either createAssignment or addAssignment.
    const handleSave = async () => {
        console.log(assignmentId);
        if (assignmentId === "AssignmentEditor") {
            console.log("Add New Assignment")
            try {
                const newAssignment = await client.createAssignment(courseId, assignment);
                dispatch(addAssignment(newAssignment));
            } catch (error) {
                console.error("Error creating assignment:", error);
            } 
        } else {
            console.log("Update Assignment")
            try {
                const updatedAssignment = await client.updateAssignment(assignment);
                dispatch(updateAssignment(updatedAssignment));
            } catch (error) {
                console.error("Error updating assignment:", error);
            } 
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    useEffect(() => {
        client.findAssignmentsForCourse(courseId).then(
            (assignments) => dispatch(setAssignments(assignments))
        );
    }, [courseId, assignment, assignmentId]);

    return (
        <div>
            <div className="d-flex justify-content-end align-items-center">
                <AiFillCheckCircle className="wd-check-mark"/>
                <h5 className="wd-published">Published</h5>
                <button type="button" class="btn btn-light"><BiDotsVerticalRounded/></button>
            </div>
            <hr/>
            <h6>Assignment Name</h6>
            <input value={assignment.title} className="form-control mb-2 wd-assignment-name"
                onChange={(e) => dispatch(selectAssignment({
                    ...assignment, title: e.target.value}))
                }/>
            <textarea className="form-control mb-4 wd-assignment-description" value={assignment.description}
                onChange={(e) => dispatch(selectAssignment({
                    ...assignment, description: e.target.value}))
                }/>
            <div className="d-flex mb-4">
                <h6>Points</h6>
                <input type="number" className="form-control wd-assignment-points"
                    value={assignment.points} onChange={(e) => dispatch(selectAssignment({
                        ...assignment, points: e.target.points}))
                    }/>
            </div>
            <div className="d-flex">
                <h6>Assign</h6>
                <div className="wd-assignment-assign">
                    Due
                    <input type="date" className="form-control mb-2" value={assignment.dueDate}
                        onChange={(e) => dispatch(selectAssignment({
                            ...assignment, dueDate: e.target.value}))
                    }/>
                    <div className="row">
                        <div className="col-md-6">
                            Available from
                            <input type="date" className="form-control wd-available-from" 
                                value={assignment.availableFromDate} 
                                onChange={(e) => dispatch(selectAssignment({
                                    ...assignment, availableFromDate: e.target.value }))
                            }/>
                        </div>
                        <div className="col-md-6">
                            Until
                            <input type="date" className="form-control wd-available-until"
                                value={assignment.availableUntilDate}
                                onChange={(e) => dispatch(selectAssignment({
                                    ...assignment, availableUntilDate: e.target.value }))
                            }/>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr className="wd-lighter-inner-line"/>
            <div className="d-flex justify-content-end align-items-center">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light me-1">
                    Cancel
                </Link>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} 
                    onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </Link>
            </div>
            <hr/>
        </div>
    );
}

export default AssignmentEditor;