import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photo, setPhoto] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhoto(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001fdc58a25c9094b198c1531765ee97940";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }
  function submitForm(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function wordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want look up?</h1>
          <form onSubmit={submitForm}>
            <input type="search" onChange={wordChange} />
          </form>
          <p>
            suggested words: sunset, piano, yoga, dog, stepped, on, a, bee..
          </p>
        </section>
        <Results results={results} />
        <Photos photos={photo} />
        <p className="coded">
          Coded by Gabriela Dontamsetti{" "}
          <a
            href="https://github.com/gabi-gabu1/react-dictionary-2"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </p>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
