import { style_courasel } from "../contents";

function Ereg() {
  return (
    <div className="paragraph" style={{style_courasel,width:"800px",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"}}>
      <div  style={{ width: "95%" ,padding:"10px"}}><p  style={{fontSize:"medium"}}>
        an electronic registration system that creates an attendance register by scanning your 
        personal QR code in a web cam, making attendance tracking seamless and efficient.
        </p></div>
      <div className="paragraph" style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
      <iframe
      allow="autoplay; fullscreen"
          allowFullScreen
        src="https://drive.google.com/file/d/1-thWq7Gq9xidw-bNhOgKeWZULLXd1eey/preview"
        style={{
            position: "absolute",
            top: 0,
            left: 100,
            width: "70%",
            height: "90%",
            border: "none",
            borderRadius: "12px"
          }}
      ></iframe>
      </div>
    </div>
  );
}

export default Ereg;