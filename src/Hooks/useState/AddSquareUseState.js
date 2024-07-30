import { useState } from "react"

const UseStateSquare=()=>{
    const [square1,square2]=useState([])

    const AddSquare=()=>{
        const newArr=[...square1,1]
        square2(newArr);
    }
    return(
        <>
            <button onClick={AddSquare}>Add Square</button>
            {
                square1.map(val=>{
                    return(
                        <>
                            <div style={{height:"50px", width:"50px",border:"2px solid black"}}></div>
                        </>
                    )
                })
            }
        </>
    )
}
export default UseStateSquare