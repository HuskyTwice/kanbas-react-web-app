import React, {useState} from "react";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {addAssignment, deleteAssignment, updateAssignment, selectAssignment} from "./assignmentsReducer";
import {Link} from "react-router-dom";

const DeleteModal = ({deleteCB, isOpen, onClose, assignment, assignmentId}) => {
    const dispatch = useDispatch();
    // const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    if(!isOpen) return null;
    // const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const openPopup = () => setIsPopupOpen(true);
    // const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="wd-popup-dialog">
            <div className="wd-popup-content">
                <p>Are you sure you want to remove the assignment? {assignment._id}</p>
                <button onClick={onClose}>Close</button>
                <button onClick={() => {
                    deleteCB()
                    console.log(assignmentId);
                    // dispatch(deleteAssignment(assignmentId));
                    onClose(); }}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteModal;