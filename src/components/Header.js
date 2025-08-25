import { Link } from "react-router-dom";
function Header(){
    return(
    <div id="header" className="links">
        <Link className="link" to={'/'}>Home</Link>
        <Link className="link" to={'/Education'}>Education</Link>
        <Link className="link" to={'/Projects'}>Projects</Link>
        <Link className="link" to={'/Contacts'}>Contact</Link>
    </div>);
}

export default Header;