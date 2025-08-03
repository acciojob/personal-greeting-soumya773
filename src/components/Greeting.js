import React, { useState } from "react";

const Greeting = () => {
    const [name, setName] = useState("");
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <label htmlFor="name">Enter your name:</label>
      <br />
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          marginTop: "5px",
          padding: "5px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {name && <h2 style={{ marginTop: "15px" }}>Hello, {name}!</h2>}
    </div>
  )
}

export default Greeting