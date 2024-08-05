import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarStatic from "../NavBar/navbarStatic";

const UserScreen = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [searching,UpdateSearching]=useState("");
  useEffect(() => {
    fetchRecipes();
  }, [searching]);

  const Search1=(event)=>{
    const Sos=event.target.value;
    UpdateSearching(Sos);
  }
  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get(`https://dummyjson.com/recipes/search?q=${searching}`);
      if (status === 200) {
        setRecipeList(data.recipes);
        console.log(data);
      }
    } catch (err) {}
  };
  return (
    <>
      <NavbarStatic />
      <h3>Welcome to recipe Screen </h3>
      <h3>Recipe listing</h3>
      <input type="text" onChange={Search1}/>
      {recipeList.map((eachRecipe) => {
        const { name, image, rating, id, cuisine } = eachRecipe;
        return (
          <>
            <h4> Dish name : {name}</h4>
            <img src={image} width={100} height={100} />
            <h5>Rating :{rating}</h5>
            <button>
              <Link to={`/recipes/${id}`}>See More</Link>
            </button>
          </>
        );
      })}
    </>
  );
};

export default UserScreen;