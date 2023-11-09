import {Link} from "react-router-dom";
import db from "../Database";
import courseImg from "../../Images/chargingPepe.jpeg"
import './index.css';
import {PiNotePencilDuotone} from "react-icons/pi";
import {React, useState} from "react";

function Dashboard({courses, course, setCourse, addCourse, deleteCourse, updateCourse}) {

    return (
        <div className="px-4 py-3">
            <h1>Dashboard</h1>
            <hr/>
            <div className="px-4 py-3">
                <h2>Published Courses ({courses.length})</h2>
                <hr/>
                <h5>Course To Add</h5>
                <div className="d-flex wd-new-course-fields">
                    <input value={course.name} className="form-control" 
                        onChange={(e) => setCourse({...course, name: e.target.value})}/>
                    <input value={course.number} className="form-control"
                        onChange={(e) => setCourse({...course, number: e.target.value})}/>
                    <input value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                    <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                    <button onClick={addCourse} className="btn btn-success wd-add-btn">Add</button>
                    <button onClick={(e) => {e.preventDefault(); updateCourse(course);}} className="btn btn-primary wd-update-btn">Update</button>
                </div>
                <div className="d-flex wd-courses">
                    {courses.map((course, index) => (
                        <div class="card h-100 wd-card">
                            <Link key={course.id} to={`/Kanbas/Courses/${course._id}`} className="btn p-0">
                                <img src={courseImg} class="card-img-top" alt="course-image" />
                                <div class="card-body">
                                    <h6 class="card-title wd-left-align">{course.name}</h6>
                                    <h5 class="card-subtitle wd-left-align">{course.number}.{course._id}</h5>
                                    <p className="wd-left-align">{course.name}</p>
                                    <div className="d-flex wd-course-option-btns">
                                        <PiNotePencilDuotone className="wd-course-edit-icon"/>
                                        <button className="btn btn-warning ms-auto wd-edit-btn" onClick={(e) =>
                                            {e.preventDefault(); setCourse(course);}}>Edit</button>
                                        <button className="btn btn-danger wd-delete-btn" onClick={(e) => 
                                            {e.preventDefault(); deleteCourse(course);}}>Delete</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;