import PrimaryButton from "./Button"

const Header = () => {

    const handleSignUp = ()=>{
        alert('sign up from header!')
    }

  const logo = "Amazon Website"
  const logo1 = "Amazon"
  const country = 'nigeria'

  return (
    <div style={HeaderStyle.HeaderContainer}>
        <h1 style={HeaderStyle.HeaderLogo} >{country == "nigeria" ? logo1 : logo}</h1>
        
        <div style={{
             display: "flex",
             alignItems: "center",
             gap: "1rem"
        }}>
            <a href="#" className="home">Home</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </div>
        {/* <button>Click</button> */}
        <PrimaryButton text="sign up" display={handleSignUp}/>
    </div>
  )
}

const HeaderStyle = {
    HeaderContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#eee"
    },

    HeaderLogo: {
        color: "red"
    }
}

export default Header