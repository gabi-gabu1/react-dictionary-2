import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function submitForm(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}`);
  }

  function wordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={submitForm}>
        <input type="search" onChange={wordChange} />
      </form>
    </div>
  );
}
