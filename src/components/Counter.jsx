// useState, useEffect, useRef
import { useState } from "react";

// A STATE piece of an object that holds the data that can change over time and affect the looks(rendering) and behavior of the application

const Counter = () => {
  //     variable,  function()          default Value
  const [form, setForm] = useState({
    userName: "",
    email: "",
  });
  const [show, setShow] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    console.log(form);
    setShow(true)
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
        margin: "3rem auto",
      }}
    >
      <input
        type="text"
        name="userName"
        placeholder="nauserNameme"
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        id="email"
        onChange={handleInput}
      />
      <button onClick={handleClick}>Show</button>

      <div>
        {show ? (
          <>
            <p>name: {form.userName}</p>
            <p>email: {form.email}</p>
          </>
        ) : (
          <>no thing</>
        )}
      </div>
    </div>
  );
};

export default Counter;
