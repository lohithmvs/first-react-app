import axios from "axios";
import { useEffect,useState } from "react";
import Table from 'react-bootstrap/Table';

const RecipeUSeEff=()=>{
    const [Recipe,UpdatedRecipe]=useState([])

    const FetchRecipe=async()=>{
        const Fetching=await axios.get("https://dummyjson.com/recipes");
        UpdatedRecipe(Fetching.data.recipes);
    }
    useEffect(()=>{
        FetchRecipe();
    },[])

    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>name</th>
                    <th>ingredients</th>
                    <th>instructions</th>
                    </tr>
                </thead>
                {
                    Recipe.map((val)=>(
                        <>
                            <tbody>
                                <tr>
                                <td>{val.name}</td>
                                <td>
                                <ol>
                                {
                                    val.ingredients.map(val1=>(
                                        <li>{val1}</li>
                                    ))
                                }
                                </ol>
                                </td>
                                <td>
                                <ol>
                                {
                                    val.instructions.map(val2=>(
                                        <li>{val2}</li>
                                    ))
                                }
                                </ol>
                                </td>
                                </tr>
                            </tbody>
                        </>
                    ))
                }
            </Table>
        </>
    )
}
export default RecipeUSeEff;