import { style_courasel } from "../contents";

function Ereg() {
  return (
    <div className="paragraph" style={{style_courasel,width:"100%"}}>
      <div  style={{ width: "95%" ,padding:"10px"}}><p  style={{fontSize:"medium"}}>
        an electronic registration system that creates an attendance register by scanning your 
        personal QR code in a web cam, making attendance tracking seamless and efficient. </p></div>
      <div className="paragraph" style={{ padding:"10px",width: "100%", display:"flex",
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
}

export default Ereg;