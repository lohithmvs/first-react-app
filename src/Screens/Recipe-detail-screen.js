import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./recipe.css";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipeDetail, setRecipeDetail] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEachProduct();
  }, [recipeId]);

  const fetchEachProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/${recipeId}`
      );
      setRecipeDetail(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching the recipe:", error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="recipe-detail-container">
      {Object.keys(recipeDetail).length > 0 ? (
        <>
          <h5 className="recipe-title">{recipeDetail.name}</h5>
          <h5 className="recipe-rating">Rating: {recipeDetail.rating}</h5>
          <img
            src={recipeDetail.image}
            alt={recipeDetail.name}
            className="recipe-image"
            width={100}
            height={100}
          />
          <p>Prep Time: {recipeDetail.prepTimeMinutes} minutes</p>
          <p>Cook Time: {recipeDetail.cookTimeMinutes} minutes</p>
          <p>Servings: {recipeDetail.servings}</p>
          <p>Difficulty: {recipeDetail.difficulty}</p>
          <p>Cuisine: {recipeDetail.cuisine}</p>
          <p>Calories per Serving: {recipeDetail.caloriesPerServing}</p>
          <p>Tags: {recipeDetail.tags.join(", ")}</p>
          <p>Meal Types: {recipeDetail.mealType.join(", ")}</p>
          <p>Reviews: {recipeDetail.reviewCount}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RecipeDetail;
