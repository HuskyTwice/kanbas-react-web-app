import {useLocation} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx";
import "../../../lib/bootstrap/bootstrap.min.css";

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
        // <nav aria-label="breadcrumb">
        //     <ol clasNames="breadcrumb align-items-center m-0">
        //         <li className="breadcrumb-item"><a href="#" style={{color: 'red', fontSize: '20px', textDecoration: 'none'}}>{course.items.number} {course.items.name}</a></li>
        //         <li className="breadcrumb-item active" aria-current="page" style={{fontSize: '20px'}}>{path}</li>
        //     </ol>
        // </nav>
    );
};

export default Breadcrumbs;