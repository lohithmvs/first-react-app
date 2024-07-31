import { useRef, useState } from "react"

const SamsungPolicy=()=>{
    const MobileName=useRef();
    const IMENumber=useRef();
    const Model=useRef();
    const Price=useRef();
    const EMI=useRef();
    const [userData,UpdatedUser]=useState({});
    const [error1,UpdateError1]=useState(false);
    const [error2,UpdateError2]=useState(false);
    const [error3,UpdateError3]=useState(false);
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const first=MobileName.current.value;
        const second=IMENumber.current.value;
        const third=Model.current.value;
        const Fourth=Price.current.value;
        const fifth=EMI.current.value;
        if(first.toLowerCase()==='samsung'){
            let matches = second.toString().match(/\d/ig); // Find all digit characters
            let length1 = matches ? matches.length : 0;
            if(length1===15){
                if(fifth.toLowerCase()==='yes' || fifth.toLowerCase()==='no'){
                    SuccessPolicy(first,second,third,Fourth,fifth);
                }
                else{
                    UpdateError3(true);
                }
            }
            else{
                UpdateError2(true);
            }
        }
        else{
            UpdateError1(true);
        }
    }

    const SuccessPolicy=async(first,second,third,Fourth,fifth)=>{
        const response=await fetch('http://localhost:3000/Policy',{
            method:"POST",
            header:{"Content-Type":"application/json"},
            body:JSON.stringify({
                MobileName:first,
                IMENumber:second,
                Model:third,
                Price:Fourth,
                EMI:fifth
            })
        })
        const data1=await response.json();
    }


    return(
        <>
            {
                Object.keys(userData).length>0?<><h2>Your Policy Registration is complete</h2></>:
                <>
                <form onSubmit={SubmitHandler} style={{maxWidth:"500px"}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    MobileName
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    ref={MobileName}
                    />
                </div>
                {error1 && <span style={{color:"red"}}>Enter correct mobile name</span>}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    IMENumber
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    ref={IMENumber}
                    />
                </div>
                {error2 && <span style={{color:"red"}}>Enter correct IMEI number</span>}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Mobile Model
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    ref={Model}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    Price
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    ref={Price}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    EMI
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    ref={EMI}
                    />
                </div>
                {error3 && <span style={{color:"red"}}>Enter only yes or no</span>}
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
export default SamsungPolicy;   