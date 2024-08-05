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
                <Route path="user" element={<UserScreen/>}/>
                <Route path="user/admin" element={<AdminScreen/>}/>
                {/* dynamic routes*/}
                <Route path="user/:userId" element={<UserScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default NavigationStack;