import './App.css';
import CustomButton from './button/button';
import Heading1,{Heading2,Heading3} from './Heading/heading';
import OrderedList from './List/orderedlist';
import UnorderedList from './List/unorderedlist';
import ProfileComponent from './Profilecomponets/ProfileComponent';
import Table from './Table/Table';
import Cards from './Card/Cards';
import { IplData } from './ipldata/IplData';
import CustomImage from './imagess/CustomImage';
import IplCards from './ipldata/IplCards';
import "./ipldata/iplcard.css";
import "./Header/header.css";
import Header from './Header/header';
import Foot1 from "./footer/footer";
import "./footer/foot.css"
const jio1=["home","address","teams","drops"];
const App=()=>{
    return (
        <>
        <div className="head">
        {
            jio1.map((val2)=>(
                <Header data1={val2} />
            ))
        }
        </div>
        <div className="card">
        {
            IplData.map(val=>(
                <IplCards src={val.src} name={val.name} arr={val.players} cups={val.Trophies}/>
            ))
        }
        </div>
        <div className="Fot">
            <Foot1/>
        </div>
        
        </>
    );
    
};
export default App;
