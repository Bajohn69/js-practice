import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <h3>{data.photographer}</h3>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <a href={data.src.large}>
          <button className="btn btn-outline-primary ">Download</button>
        </a>
      </p>
    </div>
  );
};

export default Picture;
