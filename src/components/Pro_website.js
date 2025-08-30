import { style_courasel } from "../contents";
function Website() {
 
  return(
    <div className="paragraph" style={{style_courasel,width:"100%"}}>
      <div  style={{ width: "95%" ,padding:"10px"}}><p  style={{fontSize:"medium"}}>
        My Profile websites showcasing my skills, Education 
      and Projects.</p></div>
      <div className="paragraph" style={{margin:"0", padding:"10px",width: "100%", display:"flex",
         justifyContent:"center", alignItems:"center", flexDirection:"column",height:"auto" }}>
      <iframe
      allow="autoplay; fullscreen"
          allowFullScreen
        src="https://drive.google.com/file/d/1-thWq7Gq9xidw-bNhOgKeWZULLXd1eey/preview"
        style={{    
             width: "70%",
            height: "15em",
            border: "none",
            borderRadius: "12px"
            
          }}
      ></iframe>
      </div>
</div>
  );
};


export default Website;