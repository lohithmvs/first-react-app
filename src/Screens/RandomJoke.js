import axios from "axios";
import { useEffect, useState } from "react"
import NavbarStatic from "../NavBar/navbarStatic";

const RandomJoke=()=>{
    const [data1,UpdatedData1]=useState({});
    useEffect(()=>{
        FetchJoke();
    },[])
    const FetchJoke=async()=>{
        const response=await axios.get("https://official-joke-api.appspot.com/jokes/random");
        const data2=response.data;
        UpdatedData1(data2);
    }
    return(
        <>
            <NavbarStatic/>
            <h2>{data1.setup}</h2>
            <h3>{data1.punchline}</h3>
        </>
    )

}
export default RandomJoke;