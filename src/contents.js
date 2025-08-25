var courseName={"Unisa":"BSC:\nCOMPUTER SCIENCES AND MATHEMATICS",
  "Unizulu":`BED:\nMATHEMATICS,SCIENCES AND TECHNOLOGY`};
var universities={
    "Unisa":process.env.PUBLIC_URL +"/Assets/pictures/Education/unisa.png",
    "Unizulu":process.env.PUBLIC_URL +"/Assets/pictures/Education/UNIZULU.png"  
};
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
    a passionate and skilled programmer with a strong foundation in C++, Python, and JavaScript. 
  </p>
  <h1>I specialize in the following:</h1>
  </div>,
  "C++":"Desktop and embedded Applications",
  "Python":"Desktop and embedded Applications",
  "CSS":"stylling Deskotop and web applications",
  "HTML":"structure of web applications",
  "javaScript":"interactivity of web applications",
};
var langueges={
  "react":"./Assets/pictures/skills/react.gif",
  "C++":"./Assets/pictures/skills/c++.gif",
    "Python":"./Assets/pictures/skills/python.gif",
    //"CSS":"./Assets/pictures/skills/css.png",
    //"HTML":"./Assets/pictures/skills/html.png",
    "javaScript":"./Assets/pictures/skills/js.gif"
    
  };

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
  height:'50px', 
  fontSize:'40px', 
  width:'70%'
};
var style_courasel={display: 'flex',flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',gap: '10px'};
var contacts ={
  "GitHub":"/Assets/pictures/contact/github.png",
  "LinkedIn":"/Assets/pictures/contact/linkedin.png",
  "0747411183":"/Assets/pictures/contact/phone.png",
  "mlumbanjwacpp\n@gmail.com":"/Assets/pictures/contact/email.png",
  "Gauteng & KZN":"/Assets/pictures/contact/address.png",
};
var background={
  "1":"url(/Assets/pictures/background/1.jpg)",
  "2":"url(/Assets/pictures/background/2.jpg)"
}
export {courseName,universities,universityCompletion,paragraphs,langueges,contactlinks,contacts,background,style_header,projects,style_courasel}