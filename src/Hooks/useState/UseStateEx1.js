import { useState } from "react"

const UseStateEx1=()=>{
    const [CurrLogin,UpdatedLogin]=useState(false);
    const [count,UpdatedCount]=useState(1);

    const loginHandler=()=>{
        UpdatedLogin(!CurrLogin)
    }
    const Counter1=()=>{
        UpdatedCount((count)=>count+1);
        UpdatedCount((count)=>count+1);
        UpdatedCount((count)=>count+1);
        UpdatedCount((count)=>count+1);
    }

    return(
        <>
            <h1>Login Form</h1>
            {
                CurrLogin?<h4>Welcome User</h4>:<h4>Please Login</h4>
            }
            <button onClick={loginHandler}>Click Me</button>
            <div>
                <button onClick={Counter1}>{count}</button>
            </div>
            
        </>
    )
}
export default UseStateEx1;