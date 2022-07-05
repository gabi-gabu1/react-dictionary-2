import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <br />
              <Synonyms synonym={props.meaning.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
