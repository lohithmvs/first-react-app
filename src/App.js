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
const App=()=>{
    return (
        <div>
            <SubscribeButton/>
            <TodoClass/>
            <div style={{marginTop:"20px"}}>
            <CounterClass/>
            </div>
            <IplClass/>
            <SquareClass/>
            
        </div>
        
    );
    
};
export default App;

