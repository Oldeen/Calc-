import React, { useState } from "react";
import { Button, Container, Current, Previous, Screen } from "./Styled";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setprevious] = useState("");
  const [operations, setoperation] = useState("");

  const appendValue = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const handleDelete = () => {
    setCurrent(current.slice(0, -1));
  };

  const handleAllClear = () => {
    setCurrent("");
    setoperation("");
    setprevious("");
  };

  const chooseOperation = (el) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
    } else {
      setprevious(current);
    }
    setCurrent("");
    setoperation(el.target.getAttribute("data"));
  };
  const equals = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setoperation("");
    setprevious("");
  };
  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operations) {
      case "÷ ":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };
  return (
    <Container>
      <Screen>
        <Previous>
          {previous} {operations}
        </Previous>
        <Current>{current}</Current>
      </Screen>
      <Button gridSpan={2} onClick={handleAllClear}>
        AC
      </Button>
      <Button control onClick={handleDelete}>
        DEL
      </Button>
      <Button operation data={"÷"} onClick={chooseOperation}>
        ÷
      </Button>
      <Button data={"7"} onClick={appendValue}>
        7
      </Button>
      <Button data={"8"} onClick={appendValue}>
        8
      </Button>
      <Button data={"9"} onClick={appendValue}>
        9
      </Button>
      <Button operation data={"x"} onClick={chooseOperation}>
        x
      </Button>
      <Button data={"4"} onClick={appendValue}>
        4
      </Button>
      <Button data={"5"} onClick={appendValue}>
        5
      </Button>
      <Button data={"6"} onClick={appendValue}>
        6
      </Button>
      <Button operation data={"+"} onClick={chooseOperation}>
        +
      </Button>
      <Button data={"1"} onClick={appendValue}>
        1
      </Button>
      <Button data={"2"} onClick={appendValue}>
        2
      </Button>
      <Button data={"3"} onClick={appendValue}>
        3
      </Button>
      <Button operation data={"-"} onClick={chooseOperation}>
        -
      </Button>
      <Button data={"."} onClick={appendValue} period>
        .
      </Button>
      <Button data={"0"} onClick={appendValue}>
        0
      </Button>
      <Button gridSpan={2} onClick={equals} equals>
        =
      </Button>
    </Container>
  );
};

export default Calculator;
