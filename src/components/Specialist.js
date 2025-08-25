import {paragraphs, langueges, style_header, style_courasel} from '../contents.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel  from 'react-bootstrap/Carousel';
function Courasel(){
    const keys=Object.keys(langueges);
    return (
        <Carousel style={{width: '100%', height: '100%'}} wrap={true} interval={4000}>  
            {keys.map((key, index) => (
                <Carousel.Item key={index}>
                <div style={style_courasel}>
                    <img className='lang-logo' src={langueges[key]} alt={`Language ${index + 1}`}/>
                    <h3 className='paragraph'>{key}</h3>
                    <p className='paragraph'>{paragraphs[key]}</p>
                </div>
         </Carousel.Item>
    ))}
        </Carousel>
    );
}
function Specialist(){
    return(
    <div id='specialist' className="contents ">
        <div id='myname' className='paragraph'>
            <h1 style={style_header}>Hi, I'm Mlungisi Mbanjwa</h1>
        </div>
        <div className='paragraph'>
            {paragraphs['intro']}
            <img width="30%" height="auto" src="/Assets/Pictures/Skills/all.png" alt="skills" />
        </div>
        <div style={{width:'400px', height:'600px', margin:'10px auto'}}>
            <Courasel />
        </div>
    </div>)
}

export default Specialist;