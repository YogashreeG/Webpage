import React from "react";

export function buttonId() {
  return (
    <section className="Button">
      <Btn />
      <Ok />
    </section>
  );
}

const Ok = () => <button className="button">Ok</button>;
const Btn = () => <button className="button">Submit</button>;
