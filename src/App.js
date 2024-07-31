import './App.css';
import { IplData } from './ipldata/IplData';
import IplCardReact from './Card/React-Card';
import "./Card/IplreactCss.css"
import DarkVariantExample from './Card/IplCarousel';
import BasicExample from './Card/IplCarousel';
import CondList from './Conditional-Rendering/ConditionalList';
import CondCss from './Conditional-Rendering/Conditional-CSS';
import SubscribeButton from './Class-Component/Subscribe-button';
import TodoClass from './Class-Component/Class-todo';
import CounterClass from './Class-Component/Class-counter';
import IplClass from './Class-Component/Class-Ipl';
import SquareClass from './Class-Component/Class-Square';
import IplCounter from './Class-Component/Class-IplSep';
import FetchProducts from './Fetch-data/FetchProducts';
import FetchAwait from './Fetch-data/FetchAwait';
import FetchAxios from './Fetch-data/Fetch-Axios';
import MountingClass from './LifeCycles/Mounting';
import UpdateStage from './LifeCycles/UpdateStage';
import UnmountingStage from './LifeCycles/UnMounting';
import SearchPro from './Search/Search-Poduct';
import SearchIpl from './Search/Search-IplCards';
import UseStateEx1 from './Hooks/useState/UseStateEx1';
import UseStateEx2 from './Hooks/useState/UseStateEx2';
import RecipeUseState from './Hooks/useState/RecipeUseState';
import UseStateSquare from './Hooks/useState/AddSquareUseState';
import RecipeUSeEff from './Hooks/UseEffect/RecipeUseEff';
import UseEffCase2 from './Hooks/UseEffect/UseEffectCase2';
const App=()=>{
    return (
        <div>
            {/* <RecipeUSeEff/> */}
            <UseEffCase2/>
        </div>
        
    );
    
};
export default App;

