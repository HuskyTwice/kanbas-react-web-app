import {useLocation} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx";

const Breadcrumbs = ( course ) => {
    const {pathname} = useLocation();
    let pathArray = pathname.split("/");
    let breadcrumbChar = ">";
    let path = pathArray[pathArray.length - 1];
    path = path.replace("%20", " ");
    
    return (
        <nav className="d-flex align-items-center">
            <RxHamburgerMenu className="wd-hamburger-icon"/>
            <h2 className="wd-course-name">{course.items.number} {course.items.name}</h2>
            <h3 className="wd-arrow"> {breadcrumbChar} </h3>
            <h2 className="wd-current-course-directory"> {path} </h2>
        </nav>
    );
};

export default Breadcrumbs;