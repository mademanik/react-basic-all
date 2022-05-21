
import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [title, setTitle] = useState("Welcome to my app");
  const [age, setAge] = useState(20);

  const run2function = () => {
    setTitle("Title Change");
    setAge(age * 2);
  };

  return (
    <>
      <Header />
      <h1>{title}</h1>
      <h1>{age}</h1>
      <button onClick={run2function}>Click Me</button>
    </>
  );
}

export default App;
