import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from "./recipe-detail";
import HomeScreen from "./HomeScreen";
import FavoriteRecipe from "./FavoriteRecipe";
import LocationMap from "./location";
import RecipeSeeMore from "./RecipeSeeMore";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export const DataCon = createContext();
const RecipeNavigation = () => {
  const [RecipeData1, UpdatedRecipes] = useState([]);
  const [FavRecipe, UpdatedFav] = useState([]);
  const FetchRecipes1 = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    const data1 = response.data.recipes;
    const data2 = data1.map((val) => {
      return { ...val, TurnFav: false };
    });
    UpdatedRecipes(data2);
  };
  useEffect(() => {
    FetchRecipes1();
  }, []);
  const addRecipe = (newItem) => {
    const recipeExists = FavRecipe.find((val) => val.id == newItem.id);

    const newRecipeList = RecipeData1.map((val) => {
      if (val.id === newItem.id) {
        return { ...val, TurnFav: true };
      } else {
        return val;
      }
    });

    UpdatedRecipes(newRecipeList);

    if (recipeExists) {
      toast.error("already exists in favorite foods! !", {
        position: "top-right",
      });
    } else {
      UpdatedFav([...FavRecipe, newItem]);
      toast.success("Added to favorites !", {
        position: "top-right",
      });
    }
  };
  const removFromFavorite = (id) => {
    const newRecipesList = RecipeData1.map((eachRecipe) => {
      if (eachRecipe.id == id) {
        return { ...eachRecipe, TurnFav: false };
      } else {
        return eachRecipe;
      }
    });

    UpdatedRecipes(newRecipesList);
    const newFavouriteList = FavRecipe.filter(
      (eachDish) => eachDish.id != id
    );
    UpdatedFav(newFavouriteList);
  };
  return (
    <DataCon.Provider
      value={{
        RecipeData1:RecipeData1,
        FavRecipe:FavRecipe,
        addRecipe:addRecipe,
        removFromFavorite:removFromFavorite
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"recipes"} element={<RecipeDetail />} />
          <Route path={"favorites"} element={<FavoriteRecipe />} />
          <Route path={"location"} element={<LocationMap />} />
          <Route path={"recipes/:recipesId"} element={<RecipeSeeMore />} />
        </Routes>
      </BrowserRouter>
    </DataCon.Provider>
  );
};
export default RecipeNavigation;
