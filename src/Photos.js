import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="Photos">
        <section className="Photos-section">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} alt={photo.alt} />
                </a>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
