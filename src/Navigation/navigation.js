import RandomJoke from "../Screens/RandomJoke"
import RecipeDetail from "../Screens/Recipe-detail-screen"


const { BrowserRouter, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("../Screens/home-screen")
const { default: About } = require("../Screens/about-screen")
const { default: Setting } = require("../Screens/setting-screen")
const { default: Blog } = require("../Screens/blog-screen")
const { default: InvalidScreen } = require("../Screens/invalid-screen")
const { default: UserScreen } = require("../Screens/user-screen")
const { default: AdminScreen } = require("../Screens/admin-screen")

const NavigationStack=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="setting" element={<Setting/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="*" element={<InvalidScreen/>}/>
                <Route path="recipe" element={<UserScreen/>}/>
                <Route path="user/admin" element={<AdminScreen/>}/>
                <Route path="joke" element={<RandomJoke/>}/>
                {/* dynamic routes*/}
                <Route path="user/:userId" element={<UserScreen/>}/>
                <Route path="recipes/:RecipeId" element={<RecipeDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default NavigationStack;