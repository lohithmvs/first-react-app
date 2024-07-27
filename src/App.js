import './App.css';
import { IplData } from './ipldata/IplData';
import IplCardReact from './Card/React-Card';
import "./Card/IplreactCss.css"
import DarkVariantExample from './Card/IplCarousel';
import BasicExample from './Card/IplCarousel';
import CondList from './Conditional-Rendering/ConditionalList';
import CondCss from './Conditional-Rendering/Conditional-CSS';

const App=()=>{
    return (
        <>
            <CondList/>
            <CondCss/>
            {
                true && <h2>Hello</h2> // logical and short cut operator only true values gives output
            }

        </>
        
    );
    
};
export default App;

