import {paragraphs, langueges, style_header, style_courasel} from '../contents.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel  from 'react-bootstrap/Carousel';
import all from '../Assets/pictures/skills/all.png';
import Header from './Header'
function Courasel(){
    const keys=Object.keys(langueges);
    return (
        <Carousel style={{width: '100%', height: 'auto'}} wrap={true} interval={4000}>  
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
    <div  className="contents">
        
        <div  className='paragraph'>
            <h1 style={style_header}>Hi, I'm Mlungisi Mbanjwa</h1>
        </div>
        <div className='paragraph' >
            {paragraphs['intro']}
            <img width="auto" height="80px" src={all} alt="skills" />
        </div>
        <div style={{width:'400px', height:'500px', margin:'10px auto', padding:"10px"}}>
            <Courasel />
        </div>
    </div>)
}

export default Specialist;