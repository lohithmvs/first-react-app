import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./Recipemaker.css";
import RecipeNavbar from "./RecipeNavbar";
import { Link, useParams } from "react-router-dom";
import { DataCon } from "./RecipeNavigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeDetail = () => {
  const {RecipeData1,FavRecipe,addRecipe,removFromFavorite}=useContext(DataCon);

  const AddingRecipe=(Item)=>{
    addRecipe(Item);
  }
  return (
    <>
      <ToastContainer/>
      <RecipeNavbar />
      {Object.keys(RecipeData1).length > 0 ? (
        <div className="hello">
          {RecipeData1.map((val) => (
            <>
              <div
                className="card"
                style={{ width: "18rem", boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={val.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <h6 className="card-title">Rating:{val.rating}</h6>
                  <h6 className="card-title">Cuisine:{val.cuisine}</h6>
                  <Link to={`/recipes/${val.id}`} className="btn btn-primary" style={{marginLeft:"70px"}}>
                    See more
                  </Link>
                  {
                    val.TurnFav ? <>
                    <Link to={"/favorites"}>
                    <button className="btn btn-primary" style={{marginLeft:"50px",marginTop:"10px"}}>Go to Favorites</button>
                    </Link>
                    </>:<div>
                      <button  className="btn btn-primary" onClick={()=>AddingRecipe(val)} style={{marginLeft:"50px",marginTop:"10px"}}>Add to Favorite</button>
                    </div>
                  }
                </div>
              </div>
            </>
          ))}
        </div>
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
export default RecipeDetail;
