import { useRef, useState } from "react"

const UncontrolledForm=()=>{
    const EnteredEmail=useRef();
    const EnteredPass=useRef();
    const [error,SetError]=useState(null);
    const [UserData,UpdatedData]=useState({});

    const SubmitHandler=(event)=>{
        event.preventDefault();
        const EmailGot=EnteredEmail.current.value;
        const PassGot=EnteredPass.current.value;
        if(EmailGot.length<15 && PassGot.length<15){
            FetchSubmit(EmailGot,PassGot);
            SetError(null);
        }
        else{
            SetError("Email and password should be less than 15 characters");
        }
    }

    const FetchSubmit=async(EmailRec,PassRec)=>{
        const response=await fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                username:EmailRec,
                password:PassRec
            })
        })
        const data1=await response.json();
        console.log(data1);
        if(data1.message){
            console.log(data1.message);
        }
        else{
            UpdatedData(data1);
            console.log(data1,"fetch message");
        }
    }

    return(
        <>{
            Object.keys(UserData).length>0?<>
                <h2>welcome {UserData.username} {UserData.lastName}</h2>
            </>:<>
            <form onSubmit={SubmitHandler} style={{maxWidth:"700px"}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    ref={EnteredEmail}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    ref={EnteredPass}
                    />
                </div>
                {error && <span style={{color:"red"}}>{error}</span>}
                <div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                </div>
                
            </form>
            </>
        }
            
        </>
    )
}
export default UncontrolledForm;