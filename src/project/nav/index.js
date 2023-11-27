import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Navigation() {
    const links = ["home", "search", "signin", "signup", "account"];
    const { pathname } = useLocation();

    return (
        <div className="list-group rounded-0 wd-navigation">
            {/* <Link className="list-group-item">
            </Link> */}
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/project/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    <div className="wd-itemText">{link}</div>
                </Link>
            ))}
        </div>
    );
}

export default Navigation;