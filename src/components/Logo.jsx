import logo from "../assets/logo.png"

function Logo() {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <img 
        src={logo} 
        alt="KAFÉCO Logo" 
        style={{ width: "160px" }}
      />
    </div>
  )
}

export default Logo
