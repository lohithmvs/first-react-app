import axios from "axios";
import { useEffect, useState } from "react";

const DropdownRecipe = () => {
  const [RecipeData, UpdatedRecipe] = useState({});
  const [DropRecipe,UpdatedDrop]=useState("");


  useEffect(()=>{
    FetchRecipe();
  },[])

  const FetchRecipe=async()=>{
    const response=await axios.get('https://dummyjson.com/recipes');
    UpdatedRecipe(response.data.recipes);
  }

  const DropElement=(event)=>{
    const Elem=event.target.value;
    console.log(Elem)
    UpdatedDrop(Elem);
  }

  return (
    <>
    {
        Object.keys(RecipeData).length>0?<>
            <select className="form-select" aria-label="Default select example"  onChange={DropElement}>
                {
                    RecipeData.map(val=>(
                        <>
                            <option key={val.id}>{val.name}</option>
                        </>
                    ))
                }
                
            </select>
            <h3>{DropRecipe}</h3>
        </>:<>
            <h3>Data is loading please wait</h3>
        </>
    }
      
    </>
  );
};
export default DropdownRecipe;
