// import {Link} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import {useEffect, useState} from "react";
import store from "./store";
import {Provider} from "react-redux";
import axios from "axios";

function Kanbas() {
    // const BASE_URL = "http://localhost:4000";
    const BASE_URL = "https://kanbas-node-server-app-mitf.onrender.com";
    const URL = `${BASE_URL}/api/courses`;
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15"
    });
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses,]);
        setCourse({ name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15" });
    };
    const deleteCourse = async (course) => {
        const response = await axios.delete(`${URL}/${course._id}`);
        setCourses(courses.filter((c) => c._id !== course._id));
    };
    // update is not applied to the UI immediately.
    const updateCourse = async (course) => {
        const response = await axios.put(
            `${URL}/${course._id}`, course
        );
        setCourses(courses.map((c) => (c._id === course._id ? course : c ))); 
        // setCourse({ name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15" });
    };

    useEffect(() => {
        findAllCourses();
    }, []);

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation/>
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addCourse={addCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        } />
                        <Route path="Courses/:courseId/*" element={
                            <Courses
                                courses={courses}/>
                        } />
                    </Routes>
                </div>
            </div>
        </Provider> 
    );
}
export default Kanbas;