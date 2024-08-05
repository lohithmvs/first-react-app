import axios from "axios";
import { useState } from "react"

const Dictionary=()=>{
    const [word1,UpdatedWord]=useState("");
    const [dice,UpdatedDice]=useState({})
    const [error,UpdateError]=useState(false);
    const FetchWord=async()=>{
        try{
            const response=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word1}`);
            const data1=response.data;
            UpdatedDice(data1);
            UpdateError(false);
        }catch(err){
            UpdateError(true);
        }
        
    }

    const searchWord=()=>{
        FetchWord();
    }
    const wordChange=(event)=>{
        const wording=event.target.value;
        UpdatedWord(wording);
    }

    return(
        <>
            <input type="text" onChange={wordChange}/>
            <button onClick={searchWord}>Submit</button>
            {
                error?<h2>enter the correct word</h2>:<>
                    {
                        Object.keys(dice).length>0?<>
                    <h3>Meaning {dice.map(val=>(
                        val.meanings.map(val1=>(
                            <ul>
                            {
                                val1.definitions.map(val2=>(
                                    <li>
                                        {val2.definition}
                                    </li>
                                
                            ))
                            }
                            
                            </ul>
                            
                        ))
                    ))}</h3>
                </>:<>
                    <div></div>
                </>
                    }
                </>
                
            }
        </>
    )
}
export default Dictionary;