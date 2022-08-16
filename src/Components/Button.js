import React from "react";

export function Button() {
  return (
    <section className="Button">
      <Btn />
      <Ok />
    </section>
  );
}

const Ok = () => (
  <button
    style={{
      paddingright: "50px",
      textAlign: "center",
      marginLeft: "30%",
    }}
  >
    Ok
  </button>
);
const Btn = () => (
  <button
    style={{
      paddingright: "50px",
      textAlign: "center",
      marginLeft: "40%",
    }}
  >
    Submit
  </button>
);
