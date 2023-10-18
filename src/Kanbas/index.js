import {Link} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <div className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard/>} />
                    <Route path="Courses/:courseId/*" element={<Courses/>} />
                </Routes>
                {/* <h1>Account</h1>
                <h1>Dashboard</h1>
                <h1>Courses</h1> */}
                
            </div>
        </div>
    );
}
export default Kanbas;