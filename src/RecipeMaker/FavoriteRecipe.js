import { useContext } from "react";
import RecipeNavbar from "./RecipeNavbar";
import { DataCon } from "./RecipeNavigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Recipemaker1.css"

const FavoriteRecipe = () => {
  const {RecipeData1,FavRecipe,addRecipe,removFromFavorite}=useContext(DataCon);
  const favClick = (recipesId) => {
    removFromFavorite(recipesId);
    toast.error("Removed Recipe", {
      position: "top-right",
    });
  };

  return (
    <>
      <ToastContainer />
      <RecipeNavbar />
      {FavRecipe.length > 0 ? (
        <div className="hello1">
          {FavRecipe.map((val) => (
            <>
              <div
                className="card"
                style={{
                  width: "18rem",
                  boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img src={val.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <h6 className="card-title">Rating:{val.rating}</h6>
                  <h6 className="card-title">Cuisine:{val.cuisine}</h6>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginLeft: "40px", marginBottom: "10px" }}
                    value="Remove favorite"
                    onClick={()=>favClick(val.id)}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <h2>No Favorites Found</h2>
          </div>
        </>
      )}
    </>
  );
};
export default FavoriteRecipe;
