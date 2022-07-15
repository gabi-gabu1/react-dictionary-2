import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonym.length >= 1) {
    return (
      <div className="Synonyms">
        <h4>Synonyms:</h4>
        <ul>
          {props.synonym.map((synonym, index) => {
            return <li key={index}> {synonym} </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
