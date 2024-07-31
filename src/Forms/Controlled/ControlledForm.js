import { useState } from "react";
const ControlledForm=()=>{
    const [username1,UpdateUser]=useState("");
    const [password1,UpdatePass]=useState("");
    const [userError,UpdateUserError]=useState(false);
    const [passError,UpdatePassError]=useState(false);
    const [list1,updateList]=useState([]);
    const [userData,UpdatedData]=useState({})

    const UserCheckup=(event)=>{
        const userEntered=event.target.value;
        UpdateUser(userEntered);
        if(validate(userEntered)){
            UpdateUserError(true);
        }
        else{
            UpdateUserError(false);
        }
    }

    const passCheck=(event)=>{
        const PassEntered=event.target.value;
        UpdatePass(PassEntered);
        if(validate(PassEntered)){
            UpdatePassError(true);
        }
        else{
            UpdatePassError(false);
        }
    }
    const fetchForm=async(username,password)=>{
        const response=await fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username,
                password
            })
        })
        const data1=await response.json();
        if(data1.message){
            console.log(data1.message);
        }
        else{
            const totalName=username+" "+password;
            UpdateUser("");
            UpdatePass("");
            const checkName=list1.includes(totalName);
            //UpdatedData(totalName);
            if(checkName){
                alert("user already existed");
            }
            else{
                updateList([...list1,totalName]);
            }
        }
    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        if(!userError && !passError){
            fetchForm(username1,password1);
        }
    }   
    const validate=(b)=>{
        return b.length>15;
    }
    return(
        <>
            {
                Object.keys(userData).length>0?<>
                <h2>Welcome {userData.firstName} {userData.lastName}</h2>
                </>:<>
                <form onSubmit={SubmitHandler} style={{maxWidth:"800px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                        Username
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={username1}
                        onChange={UserCheckup}
                        />
                    </div>
                    {userError && <span style={{color:"red"}}>enter the username less than 15 characters</span>}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                        </label>
                        <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password1}
                        onChange={passCheck}
                        />
                    </div>
                    {passError && <span style={{color:"red"}}>enter the password less than 15 characters</span>}
                    <div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
                <h3>List of registered users</h3>
            <ol>
            {
                list1.map(val=>(
                    <>
                        <li>{val}</li>
                    </>
                ))
            }
            </ol>
                </>
            }
        </>
    )
        
}
export default ControlledForm;