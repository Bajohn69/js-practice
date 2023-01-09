import React from "react";

export default function RecipeTile({ recipe }) {
  return (
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && // 就不會出現 SVG 檔
    <div
      className="recipeTile col"
      onClick={() => {
        window.open(recipe["recipe"]["url"]);
      }}
    >
      <div className="img-wrap">
        <img className="img" src={recipe["recipe"]["image"]} />
      </div>
      <p className="title">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
