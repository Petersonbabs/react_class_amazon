
const UserProfile = ({name, age, location, profilePicture}) => {
  // hooks

  return (
    <div style={{
        border: "1px solid",
        margin: "2rem",
        width: "300px",
        borderRadius: "8px",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem"
    }}>
        <img src={profilePicture} alt="" width={80} height={80} style={{
            objectFit: "cover",
            borderRadius: "50%"
        }} />
        <div>
        <p>Name: {name}</p>
        <p>Age: {age ? age : 'Age not specified'}</p>
        <p>Location: {location}</p>
        </div>
    </div>
  )
}

export default UserProfile