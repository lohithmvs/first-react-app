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

const App=()=>{
    return (
        <div>
            {
                IplData.map(val=>(
                    <div>
                        <h2>{val.name}</h2>
                        <CustomImage src={val.src} alt="hlo" height={100} width={100}/>
                        {
                            val.players.map(val1=>(
                                <h4>{val1}</h4>
                            ))
                        }
                        <h3>Trophies:{val.Trophies}</h3>
                    </div>
                ))
            }
        </div>
        
    );
    
};
export default App;
