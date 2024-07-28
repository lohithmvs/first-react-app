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
const App=()=>{
    return (
        <div>
            <FetchAwait/>
            <h2>Country offical Names</h2>
            <FetchAxios/>
        </div>
        
    );
    
};
export default App;

