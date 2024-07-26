import './App.css';
import { IplData } from './ipldata/IplData';
import IplCardReact from './Card/React-Card';
import "./Card/IplreactCss.css"
import DarkVariantExample from './Card/IplCarousel';
import BasicExample from './Card/IplCarousel';

const App=()=>{
    return (
        <>
            <div className='IplReact'>
            {
                IplData.map((val,index)=>{
                    return (
                        <div key={index}>
                            <IplCardReact src={val.src} name={val.name} text={val.data} trophy={val.Trophies}/>
                        </div>
                    )
                })
            }
        </div>
            <DarkVariantExample/>
        </>
        

        

    );
    
};
export default App;

