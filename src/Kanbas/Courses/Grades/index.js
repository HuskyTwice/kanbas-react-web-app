import db from "../../Database";
import {useParams} from "react-router-dom";
import {BiImport, BiExport} from "react-icons/bi";
import {BsFillGearFill} from "react-icons/bs";
import {FiFilter} from "react-icons/fi";
import "./index.css"

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div>
            <div className="d-flex m-2"> /* 
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle wd-gradebook-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        Gradebook
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
                <div className="d-flex ms-auto">
                    <button type="button" class="btn btn-light"><BiImport/> Import</button>
                    <div class="dropdown wd-export">
                        <button class="btn btn-light dropdown-toggle wd-export-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <BiExport/> Export
                        </button>
                        <ul class="dropdown-menu">
                            {/* <li><a class="dropdown-item" href="#">export option 1</a></li> */}
                            {/* <li><a class="dropdown-item" href="#">export option 2</a></li> */}
                        </ul>
                    </div>
                    <button type="button" class="btn btn-light"><BsFillGearFill/></button>
                </div>
            </div>

            <div className="d-flex">
                <div className="flex" style={{flex: 1, marginRight: 15}}>
                    <h4>Student Names</h4>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Students" aria-label="Search" aria-describedby="search-button"/>
                    </div>
                </div>
                <div className="flex" style={{flex: 1, marginRight: 15}}>
                    <h4>Assignment Names</h4>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Assignments" aria-label="Search" aria-describedby="search-button"/>
                    </div>
                </div>
            </div>
            <button class="btn btn-light wd-filter-btn" type="button" id="search-button"><FiFilter/> Apply Filters</button>

            <div className="table-responsive wd-table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={user._id}>
                                    <td className="wd-student-name">{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td key={assignment._id}>{grade?.grade || ""}</td>);
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;