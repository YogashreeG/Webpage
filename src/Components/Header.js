import React from "react";

export function Header() {
  return (
    <section className="Header">
      <Head />
    </section>
  );
}

const Head = () => (
  <h1
    style={{
      color: "red",
      textAlign: "center",
      background: "green",
    }}
  >
    Welcome Wonderland
  </h1>
);
