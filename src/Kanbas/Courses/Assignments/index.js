import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {AiOutlinePlus, AiFillCheckCircle} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {addAssignment, deleteAssignment, updateAssignment, selectAssignment} from "./assignmentsReducer";
import DeleteModal from "./DeleteModal";

function Assignments() {
    const {courseId} = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    // const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const dispatch = useDispatch();

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    const deleteCB = () => alert('delete')

    return (
        <div className="col">
            <div className="d-flex justify-content-between wd-assignment-buttons">
                <div className="flex-start">
                    <input type="text" className="p-2 wd-assignment-searchbar" placeholder="Search for Assignment"/>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" class="btn btn-light h-20">+ Group</button>
                    <Link to="./AssignmentEditor">
                        <button type="button" class="btn btn-danger" >+ Assignment</button>
                    </Link>
                    
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
                        <div className="d-flex align-items-center">
                            <div className="d-flex wd-assignment-item">
                                <Link 
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-itm d-flex align-items-center wd-assignment-item"
                                    onClick={() => dispatch(selectAssignment(assignment))}>
                                    <FiEdit className="wd-edit-icon"/>
                                    <h5 className="m-0">{assignment.title}</h5>
                                    <AiFillCheckCircle className="ms-auto wd-assignment-check-icon"/>
                                    <BiDotsVerticalRounded className="wd-assignment-threedots-icon"/>
                                    <div>
                                        {assignment._id}
                                    </div>
                                </Link>
                                
                            </div>
                            <div className="ms-auto">
                                <button className="btn btn-danger" onClick={openPopup}>Delete</button>
                                <DeleteModal deleteCB={() => {
                                    console.log(assignment._id)
                                    dispatch(deleteAssignment(assignment._id))
                                    }} isOpen={isPopupOpen} onClose={closePopup}
                                    assignment={assignment}
                                    assignmentId={assignment._id}/>
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Assignments;