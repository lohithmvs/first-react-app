import axios from "axios";
import { useEffect, useState } from "react"

const DogFacts=()=>{
    const [dogData,UpdatedData]=useState({});

    const fetchDog=async()=>{
        const response=await axios.get('https://dog-api.kinduff.com/api/facts');
        const data1=response.data;
        UpdatedData(data1);
    }

    useEffect(()=>{
        fetchDog();
    },[])

    return(
        <>
            <h2>Fact of the day</h2>
            <h3>{dogData.facts}</h3>
        </>
    )
}
export default DogFacts;