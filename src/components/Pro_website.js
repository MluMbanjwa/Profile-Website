import { style_courasel } from "../contents";
function Website() {
 
  return(
    <div className="paragraph" style={{style_courasel,width:"800px"}}>
      <div className="paragraph" style={{ width: "100%" }}>E-reg details</div>
      <div className="paragraph" style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
      <iframe
      allow="autoplay; fullscreen"
          allowFullScreen
        src="https://drive.google.com/file/d/1Qwz21fHl8SsE6sSAKhW8WC6HDXVgJxQZ/preview"
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
  )
  ;
}

export default Website;