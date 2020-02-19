import React from "react";
import emojipedia from "./../emojipedia";
import Card from "./Card";

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
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(mapCards)}</dl>
    </div>
  );
}

export default App;
