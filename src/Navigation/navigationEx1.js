import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from "../Screens/ScreensEx1/MainScree.n"
import RecipeScreen from "../Screens/ScreensEx1/RecipeScreen"
import ControlRegistration from "../Forms/Controlled/ControlRegistration"
import ControlledForm from "../Forms/Controlled/ControlledForm"
import HomeScreen from "../Screens/home-screen"
import Setting from "../Screens/setting-screen"

const NavigationEx1=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="home" element={<HomeScreen/>}/>
                <Route path="setting" element={<Setting/>}/>
                <Route path="login" element={<ControlRegistration/>}/>
                <Route path="Registration" element={<ControlledForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default NavigationEx1;