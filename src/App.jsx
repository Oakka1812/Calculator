import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import Button from "./components/Button";

const App = () => {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);

  const buttonHandler = (value) => {
    setInput(value);
    if (value === "C") {
      setInput(0);
      setOutput(0);
    } else if (value === "Back") {
      input.length > 1
        ? setInput(input.slice(0, input.length - 1))
        : setInput(0);
    } else if (value === "=") {
      setOutput(eval(input));
      setInput(0);
    } else {
      input === 0 ? setInput(value) : setInput(input + value);
    }
  };
  return (
    <>
      <div className="container">
        <div className="calculator-frame">
          <Output output={output} />
          <Input input={input} />
          <Button buttonHandler={buttonHandler} />
        </div>
      </div>
    </>
  );
};

export default App;
