import React from "react";

export default function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        <div className="img-wrap">
          <img className="img" src={recipe["recipe"]["image"]} />
        </div>
        <p className="title">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
}
