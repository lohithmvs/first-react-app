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
import "./footer/foot.css";
import CustomList from './List/CustomList';

const data1=["apple","pineapple","orange"]
const App=()=>{
    return (
        <CustomList arr={data1}/>
    );
    
};
export default App;
