import Website from "./Pro_website";
import { Carousel } from "react-bootstrap";
import Ereg from "./Pro_ereg";
import Header from "./Header";
function Courasel(){
    return (
        <Carousel wrap={true} interval={120000}>  
            <Carousel.Item>
               <Ereg/>
            </Carousel.Item>
            <Carousel.Item>
               <Website/>
            </Carousel.Item>
        </Carousel>
    );
}

function Projects(){
    return(
    <div id='projects' className="contents" style={{width: '100%', borderRadius: '10px', padding: '10px'
    ,height: 'auto'}}>
         <Courasel/>
    </div>)
}

export default Projects;