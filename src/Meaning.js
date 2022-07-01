import React from "react";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>
                {" "}
                <small>{definition.example}</small>
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
