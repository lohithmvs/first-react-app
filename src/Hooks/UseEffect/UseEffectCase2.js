import { useEffect, useReducer, useState } from "react"

const UseEffCase2=()=>{
    const [age,UpdatedAge]=useState(0);
    const [count,UpdatedCount]=useState(0);
    const AgePlus=()=>{
        const age1=age+1;
        UpdatedAge(age1);
    }
    const CountPlus=()=>{
        UpdatedCount((count)=>count+1);
        UpdatedCount((count)=>count+1);
        UpdatedCount((count)=>count+1);
    }
    useEffect(()=>{
        console.log("hello");
    },[age])

    return(
        <>
            <button onClick={CountPlus}>Count {count}</button>
            <button onClick={AgePlus}>Age {age}</button>
        </>
    )
}
export default UseEffCase2;