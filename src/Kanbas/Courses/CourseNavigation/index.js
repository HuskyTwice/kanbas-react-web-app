import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People",
                   "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
                   "Collaborations", "Syllabus", "Settings"];
    const {courseId} = useParams();
    const {pathname} = useLocation();
    let pathArray = pathname.split("/");
    console.log(pathArray);
    let path = pathArray[pathArray.length - 1];
    path = path.replace("%20", " ");

    return (
        <div className="list-group wd-course-navigation" style={{width: 150}}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${path.includes(link) && "active"}`}>
                        {link}
                </Link>
            ))}
        </div>
    );
}

export default CourseNavigation;