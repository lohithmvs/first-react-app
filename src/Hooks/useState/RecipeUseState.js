import { useState } from "react";
import Table from 'react-bootstrap/Table';

const RecipeUseState=()=>{
    const [addRecipe,UpdatedRecipe]=useState([
        {
          "id": 1,
          "name": "Classic Margherita Pizza",
          "ingredients": [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste"
          ],
          "instructions": [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot."
          ],
          "prepTimeMinutes": 20,
          "cookTimeMinutes": 15,
          "servings": 4,
          "difficulty": "Easy",
          "cuisine": "Italian",
          "caloriesPerServing": 300,
          "tags": [
            "Pizza",
            "Italian"
          ],
          "userId": 166,
          "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
          "rating": 4.6,
          "reviewCount": 98,
          "mealType": [
            "Dinner"
          ]
        },
        {
          "id": 2,
          "name": "Vegetarian Stir-Fry",
          "ingredients": [
            "Tofu, cubed",
            "Broccoli florets",
            "Carrots, sliced",
            "Bell peppers, sliced",
            "Soy sauce",
            "Ginger, minced",
            "Garlic, minced",
            "Sesame oil",
            "Cooked rice for serving"
          ],
          "instructions": [
            "In a wok, heat sesame oil over medium-high heat.",
            "Add minced ginger and garlic, sauté until fragrant.",
            "Add cubed tofu and stir-fry until golden brown.",
            "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
            "Pour soy sauce over the stir-fry and toss to combine.",
            "Serve over cooked rice."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 20,
          "servings": 3,
          "difficulty": "Medium",
          "cuisine": "Asian",
          "caloriesPerServing": 250,
          "tags": [
            "Vegetarian",
            "Stir-fry",
            "Asian"
          ],
          "userId": 143,
          "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
          "rating": 4.7,
          "reviewCount": 26,
          "mealType": [
            "Lunch"
          ]
        },
        {
          "id": 3,
          "name": "Chocolate Chip Cookies",
          "ingredients": [
            "All-purpose flour",
            "Butter, softened",
            "Brown sugar",
            "White sugar",
            "Eggs",
            "Vanilla extract",
            "Baking soda",
            "Salt",
            "Chocolate chips"
          ],
          "instructions": [
            "Preheat the oven to 350°F (175°C).",
            "In a bowl, cream together softened butter, brown sugar, and white sugar.",
            "Beat in eggs one at a time, then stir in vanilla extract.",
            "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
            "Fold in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 10-12 minutes or until edges are golden brown.",
            "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 10,
          "servings": 24,
          "difficulty": "Easy",
          "cuisine": "American",
          "caloriesPerServing": 150,
          "tags": [
            "Cookies",
            "Dessert",
            "Baking"
          ],
          "userId": 34,
          "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
          "rating": 4.9,
          "reviewCount": 13,
          "mealType": [
            "Snack",
            "Dessert"
          ]
        },
        {
          "id": 4,
          "name": "Chicken Alfredo Pasta",
          "ingredients": [
            "Fettuccine pasta",
            "Chicken breast, sliced",
            "Heavy cream",
            "Parmesan cheese, grated",
            "Garlic, minced",
            "Butter",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
          ],
          "instructions": [
            "Cook fettuccine pasta according to package instructions.",
            "In a pan, sauté sliced chicken in butter until fully cooked.",
            "Add minced garlic and cook until fragrant.",
            "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
            "Season with salt and pepper to taste.",
            "Combine the Alfredo sauce with cooked pasta.",
            "Garnish with fresh parsley before serving."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 20,
          "servings": 4,
          "difficulty": "Medium",
          "cuisine": "Italian",
          "caloriesPerServing": 500,
          "tags": [
            "Pasta",
            "Chicken"
          ],
          "userId": 136,
          "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
          "rating": 4.9,
          "reviewCount": 82,
          "mealType": [
            "Lunch",
            "Dinner"
          ]
        },
        {
          "id": 5,
          "name": "Mango Salsa Chicken",
          "ingredients": [
            "Chicken thighs",
            "Mango, diced",
            "Red onion, finely chopped",
            "Cilantro, chopped",
            "Lime juice",
            "Jalapeño, minced",
            "Salt and pepper to taste",
            "Cooked rice for serving"
          ],
          "instructions": [
            "Season chicken thighs with salt and pepper.",
            "Grill or bake chicken until fully cooked.",
            "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
            "Dice the cooked chicken and mix it with the mango salsa.",
            "Serve over cooked rice."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 25,
          "servings": 3,
          "difficulty": "Easy",
          "cuisine": "Mexican",
          "caloriesPerServing": 380,
          "tags": [
            "Chicken",
            "Salsa"
          ],
          "userId": 26,
          "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
          "rating": 4.9,
          "reviewCount": 63,
          "mealType": [
            "Dinner"
        ]}])

    const DeleteRecipe=(ind)=>{
        const newArr=addRecipe.filter((_,index)=>(
            ind!=index
        ))
        UpdatedRecipe(newArr);
    }
    const RecipeAdd=()=>{
        const NewAxis={
            "id": 7,
            "name": "Tomato Basil Bruschetta",
            "ingredients": [
                "Baguette, sliced",
                "Tomatoes, diced",
                "Fresh basil, chopped",
                "Garlic cloves, minced",
                "Balsamic glaze",
                "Olive oil",
                "Salt and pepper to taste"
            ],
            "instructions": [
                "Preheat the oven to 375°F (190°C).",
                "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
                "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
                "Season with salt and pepper to taste.",
                "Top each toasted baguette slice with the tomato-basil mixture.",
                "Drizzle with balsamic glaze before serving."
            ],
            "prepTimeMinutes": 15,
            "cookTimeMinutes": 10,
            "servings": 6,
            "difficulty": "Easy",
            "cuisine": "Italian",
            "caloriesPerServing": 120,
            "tags": [
                "Bruschetta",
                "Italian"
            ],
            "userId": 137,
            "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
            "rating": 4.7,
            "reviewCount": 95,
            "mealType": [
                "Appetizer"
            ]
        }
        UpdatedRecipe([...addRecipe,NewAxis])
    }
    
    const DeleteAll=()=>{
        UpdatedRecipe([]);
    }

    return(
        <>
            {Object.keys(addRecipe).length>0?<>
                <button style={{color:"blue"}} onClick={RecipeAdd}>Add Recipe</button>
                <button onClick={DeleteAll} style={{color:"red"}}>Delete All</button>
                {
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Recipe Name</th>
                            <th>cuisine</th>
                            <th>rating</th>
                            <th>Delete Recipe</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            addRecipe.map((val,index)=>(
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.cuisine}</td>
                                    <td>{val.rating}</td>
                                    <td><button onClick={()=>DeleteRecipe(index)}>Delete</button></td>
                                </tr>

                            ))
                        }
                        </tbody>
                    </Table>
                    
                }
            </>:
            <>
                <h3>To load the data click the Button</h3>
            </>}
        </>
    )
}
export default RecipeUseState;
