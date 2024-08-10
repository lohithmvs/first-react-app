import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RecipeCard.css";
import React from "react";
import RecipeNavbar from "./RecipeNavbar";
import { DataCon } from "./RecipeNavigation";

const RecipeSeeMore = () => {
  const { recipesId } = useParams();
  const [dataRecipeId, UpdatedRecipeId] = useState({});

  const FetchRecipeId = async () => {
    const response = await axios.get(
      `https://dummyjson.com/recipes/${recipesId}`
    );
    UpdatedRecipeId(response.data);
  };
  useEffect(() => {
    FetchRecipeId();
  }, []);

  return (
    <>
        <RecipeNavbar/>
      {Object.keys(dataRecipeId).length > 0 ? (
        <>
          <div className="recipe-card">
            <img
              src={dataRecipeId.image}
              alt={dataRecipeId.name}
              className="recipe-image"
            />
            <div className="recipe-details">
              <h2 className="recipe-title">{dataRecipeId.name}</h2>
              <p className="recipe-rating">Rating: {dataRecipeId.rating} ★</p>
              <h3>Ingredients:</h3>
              <ul className="recipe-ingredients">
                {dataRecipeId.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3>Instructions:</h3>
              <ol className="recipe-instructions">
                {dataRecipeId.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
            
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default RecipeSeeMore;
