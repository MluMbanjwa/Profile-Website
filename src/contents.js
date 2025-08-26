import unizuluLogo from "./Assets/pictures/Education/UNIZULU.png";
import unisaLogo from "./Assets/pictures/Education/unisa.png";
import ReactLogo from "./Assets/pictures/skills/react.gif";
import cppLogo from "./Assets/pictures/skills/c++.gif";
import pythonLogo from "./Assets/pictures/skills/python.gif";
import jsLogo from "./Assets/pictures/skills/js.gif";
import gitHubLogo from "./Assets/pictures/contact/github.png";
import linkedInLogo from "./Assets/pictures/contact/linkedin.png";
import cellLogo from"./Assets/pictures/contact/phone.png";
import emailLogo from "./Assets/pictures/contact/email.png";
import background1 from "./Assets/pictures/background/1.jpg";
import background2 from "./Assets/pictures/background/2.jpg";
import locationLogo from "./Assets/pictures/contact/address.png";

var courseName={"Unisa":"BSC:\nCOMPUTER SCIENCES AND MATHEMATICS",
  "Unizulu":`BED:\nMATHEMATICS,SCIENCES AND TECHNOLOGY`};


const universities={"Unisa":unisaLogo,"Unizulu":unizuluLogo};

 var universityCompletion={
    "Unisa":"2020-2025",
    "Unizulu":"2014-2017"
  };
  var paragraphs = {
  summary:<p> Educator with a strong background in
           Math, Science, and Technology (B.Ed) 
           and currently in my final year doing BSc in Computer Sciences. 
           Skilled in Python and C++, with 
           experience building desktop apps using 
           PyQt6, OpenCV, NumPy, SymPy, and  
           SQLite. Developed tools actively used in 
           schools to improve teaching and 
           learning. Seeking a Computer Science 
           internship to transition into the tech 
           industry.</p>,
  intro: <div>
  <p>
    I'm a final year student with 3 modules left to finish my Bsc in Computer Sciences and Mathematics.
  </p>
  <h1>I specialize in the following:</h1>
  </div>,
  "C++":"OOP,Desktop and embedded Applications",
  "Python":"OOP,Desktop and embedded Applications",
  "JavaScript":"interactivity of web applications",
  "react":"building web applications"
};


const langueges={"react":ReactLogo,"C++":cppLogo,"Python":pythonLogo,"JavaScript":jsLogo};

var projects={
  "p1":["pic","p1 Contents"],
  "p2":["pic","p2 Contents"],
  "p3":["pic","p3 Contents"]
};
var contactlinks = {
  "GitHub": "https://github.com/MluMbanjwa",
  "LinkedIn": "https://www.linkedin.com/in/mlu-mbanjwa-62aa8517a",
  "0747411183": 'tel:0747411183',
  "mlumbanjwacpp\n@gmail.com": 'mailto: mlumbanjwacpp@gmail.com',
  "Gauteng & KZN": 'https://maps.app.goo.gl/4rZbqc5uncQFFR6a7'  
};

var style_header={
  height:'auto', 
  fontSize:'30px', 
};
var style_courasel={display: 'flex',flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',gap: '10px'};
const contacts={
    "GitHub":gitHubLogo,
    "LinkedIn":linkedInLogo,
    "0747411183":cellLogo,
    "mlumbanjwacpp\n@gmail.com":emailLogo,
    "Gauteng & KZN":locationLogo,
}

const background={"1":background1,"2":background2};
export {courseName,universities,universityCompletion,paragraphs,langueges,contactlinks,contacts,background,style_header,projects,style_courasel}