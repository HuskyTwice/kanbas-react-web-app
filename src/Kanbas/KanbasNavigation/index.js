import {Link, useLocation} from "react-router-dom";
import {PiUserCircleFill} from "react-icons/pi";
import {BsSpeedometer2} from "react-icons/bs";
import {RiBook2Line} from "react-icons/ri";
import {BiCalendar} from "react-icons/bi";
import {HiMiniInboxArrowDown} from "react-icons/hi2";
import {AiOutlineClockCircle} from "react-icons/ai";
import {AiOutlineYoutube} from "react-icons/ai";
import {BiArrowFromLeft} from "react-icons/bi";
import {BsQuestionCircle} from "react-icons/bs";
import "./index.css";
import NULogo from '../../Images/NULogo.png';

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        Account: <PiUserCircleFill className="wd-icon wd-user-icon"/>,
        Dashboard: <BsSpeedometer2 className="wd-icon"/>,
        Courses: <RiBook2Line className="wd-icon"/>,
        Calendar: <BiCalendar className="wd-icon"/>,
        Inbox: <HiMiniInboxArrowDown className="wd-icon"/>,
        History: <AiOutlineClockCircle className="wd-icon"/>,
        Studio: <AiOutlineYoutube className="wd-icon"/>,
        Commons: <BiArrowFromLeft className="wd-icon"/>,
        Help: <BsQuestionCircle className="wd-icon"/> 
    }
    const {pathname} = useLocation();

    return (
        <div className="list-group rounded-0 wd-kanbas-navigation">
            <Link className="list-group-item wd-item">
                <img src={NULogo} className="wd-nu-logo img-fluid" style={{width: '80px', backgroundColor: 'black'}}/>
            </Link>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {/* {linkToIconMap[link]}
                    {link} */}
                    <div className="wd-itemIcon">{linkToIconMap[link]}</div>
                    <div className="wd-itemText">{link}</div>
                </Link>
            ))}
        </div>
    );
}

export default KanbasNavigation;