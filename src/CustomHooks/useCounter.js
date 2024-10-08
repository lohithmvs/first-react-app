import { useState } from "react"

export const useCounter=(initialState=10,scale=1)=>{
    const [counter,UpdatedCounter]=useState(initialState);
    const IncreaseCount=()=>{
        UpdatedCounter(counter+scale);
    }
    const ReduceCount=()=>{
        UpdatedCounter(counter-scale);
    }
    const ResetCount=()=>{
        UpdatedCounter(0)
    }

    return[counter,IncreaseCount,ReduceCount,ResetCount]
}