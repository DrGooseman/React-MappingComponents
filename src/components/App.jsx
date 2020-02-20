import React from "react";
import emojipedia from "./../emojipedia";
import Card from "./Card";
import { useState } from "react";

function mapCards(card) {
  return (
    <Card
      id={card.id}
      symbol={card.emoji}
      title={card.name}
      content={card.meaning}
    />
  );
}

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => ({ ...prevValue, [name]: value }));
  }
  function handleClick() {
    // setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        <dl className="dictionary">{emojipedia.map(mapCards)}</dl>
      </div>

      <div className="container">
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="First name."
          name="fName"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Last name."
          name="lName"
          value={fullName.lName}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
