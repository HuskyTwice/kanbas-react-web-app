import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import './index.css'
import CourseNavigation from "./CourseNavigation";
import Breadcrumbs from "./Breadcrumbs";
import Modules from "./Modules";
import {PiEyeglassesLight} from "react-icons/pi";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "../../lib/bootstrap/bootstrap.min.css"

function Courses() {
    const { courseId } = useParams();
    const course = db.Courses.find((course) => course._id === courseId);

    return (
        <div className="wd-container m-2">
            <div className="d-flex align-items-center">
                <Breadcrumbs items={course}/>
                <button className="btn btn-light wd-test ms-auto" type="button"><PiEyeglassesLight/> Student View</button>
            </div>
            <hr/>
            <div className="d-flex wd-body2">
                <CourseNavigation/>
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Grades" element={<Grades/>} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussions</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;