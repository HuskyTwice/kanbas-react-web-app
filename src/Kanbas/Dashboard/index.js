import {Link} from "react-router-dom";
import db from "../Database";
import courseImage from "../../Images/chargingPepe.jpeg"
import './index.css';
import {PiNotePencilDuotone} from "react-icons/pi";

function Dashboard() {
    const courses = db.Courses;
    return (
        <div className="px-4 py-3">
            <h1>Dashboard</h1>
            <hr/>
            <div className="px-4 py-3">
                <h2>Published Courses ({courses.length})</h2>
                <hr/>
                <div className="d-flex wd-courses">
                    {courses.map((course, inedx) => (
                        <div class="card h-100 wd-card">
                            <Link key={course.id} to={`/Kanbas/Courses/${course._id}`} className="btn p-0">
                                <img src={courseImage} class="card-img-top" alt="course-image" />
                                <div class="card-body">
                                    <h6 class="card-title float-start">{course.name}</h6>
                                    <h5 class="card-subtitle float-start">{course.number}.{course._id}</h5>
                                    <p className="float-start">{course.name}<br/>
                                        <PiNotePencilDuotone className="wd-course-edit-icon float-start"/>
                                    </p>
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