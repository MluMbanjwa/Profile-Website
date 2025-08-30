import { contactlinks,contacts, style_header } from "../contents";
import { Link } from "react-router-dom";
import Header from "./Header";
function Contacts(){
    return(
    <div className="contents ">
        <h1 className="paragraph" style={style_header}>Contact Me</h1>
        <div className="contact ">
            {Object.keys(contacts).map((key) => (
               <a href={contactlinks[key]} className="paragraph" style={{width:"160px"}} key={key} target="_blank" rel="noopener noreferrer"> 
                    <div className="contact-item" style={{width:'150px', height:'200px'}}>
                    <img src={contacts[key]} alt={key}/>
                    <span >{key}</span>
                    </div>
                </a>
            ))}
        </div>
    </div>)
}
export default Contacts;