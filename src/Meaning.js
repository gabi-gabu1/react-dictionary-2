import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <h4>Definition:</h4>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 2) {
          return (
            <div key={index}>
              <ul>
                <li>{definition.definition}</li>
              </ul>

              <em>
                <small>{definition.example}</small>
              </em>
            </div>
          );
        } else {
          return null;
        }
      })}
      <Synonyms synonym={props.meaning.synonyms} />
    </div>
  );
}
