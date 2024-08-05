import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from "../Screens/ScreensEx1/MainScree.n"
import RecipeScreen from "../Screens/ScreensEx1/RecipeScreen"
import ControlRegistration from "../Forms/Controlled/ControlRegistration"
import ControlledForm from "../Forms/Controlled/ControlledForm"

const NavigationEx1=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="Recipes" element={<RecipeScreen/>}/>
                <Route path="login" element={<ControlRegistration/>}/>
                <Route path="Registration" element={<ControlledForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default NavigationEx1;