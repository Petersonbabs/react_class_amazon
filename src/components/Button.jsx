
const PrimaryButton = ({text, style, display}) => {

   

  return (<button onClick={display} style={{
    background: 'blue',
    padding: ".5rem 1rem",
    borderRadius: "5px",
    border: "none",
    color: "white",
    ...style
  }}>{text}</button>)
}

export default PrimaryButton