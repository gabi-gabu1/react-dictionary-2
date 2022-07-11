import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <h4>Definition:</h4>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 2) {
          return (
            <div key={index}>
              <div>
                {definition.definition}
                <br />
                <em>
                  <small>{definition.example}</small>
                </em>
              </div>
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
