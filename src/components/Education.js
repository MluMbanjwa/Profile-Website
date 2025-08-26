import { courseName,universities,universityCompletion,style_header } from "../contents";
import Header from "./Header";
function Education(){
    return(
    <div  className="contents">
        <h1 className="paragraph" style={style_header}>Education</h1>
            {Object.keys(courseName).map((uni, index) => (
                <div key={index} className="paragraph">
                    <h3>{uni}</h3>
                    <p>{courseName[uni]}</p>
                    <img className="university-logo" src={universities[uni]} alt={uni}/>
                    <p>Completion: {universityCompletion[uni]}</p>
                </div>
            ))}
    </div>)
}
export default Education;