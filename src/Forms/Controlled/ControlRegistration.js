import { useState } from "react";
const ControlRegistration = () => {
  const [email, UpdatedEmail] = useState("");  
  const [pass, UpdatedPass] = useState("");
  const [addr, UpdatedAddr] = useState("");
  const [city, UpdatedCity] = useState("");
  const [state, UpdatedState] = useState("");
  const [zip, UpdatedZip] = useState("");
  const [Gender,UpdatedGender]=useState("");
  const [checking, UpdatedChecking] = useState(false);
  const [passError,SetPass]=useState(false);
  const [AddrError,SetAddr]=useState(false);
  const [ZipError,SetZip]=useState(false);
  const [EmailError,SetEmail]=useState(false);
  const [userData,SetUserData]=useState({});
  const EmailChange=(event)=>{
    const EnteredEmail=event.target.value;
    const a=/@gmail.com$/.test(EnteredEmail);
    if(a){
        UpdatedEmail(EnteredEmail);
        SetEmail(false);
    }
    else{
        SetEmail(true);
    }
    
  }
  const PassChange=(event)=>{
    const EnteredPass=event.target.value;
    const b=EnteredPass.length;
    const c=EnteredPass.match(/\W/);
    const d=EnteredPass.match(/\d/);
    const len2=c?c.length:0;
    const len3=d?d.length:0;
    if(b>=10 && len2>0 && len3>0){
        UpdatedPass(EnteredPass);
        SetPass(false);
    }
    else{
        SetPass(true);
    }
  }

  const AddressChange=(event)=>{
    const EnteredAddr=event.target.value;
    let e=EnteredAddr.length>12?EnteredAddr.length:0;
    if(e>12){
        UpdatedAddr(EnteredAddr);
        SetAddr(false);
    }
    else{
        SetAddr(true);
    }
  }

  const CityChange=(event)=>{
    UpdatedCity(event.target.value);
  }

  const StateChange=(event)=>{
    UpdatedState(event.target.value)
  }

  const ZipChange=(event)=>{
    const EnteredZip=event.target.value;
    const f=EnteredZip.match(/\d/g)?EnteredZip.match(/\d/g).length:0;
    if(f===6){
        UpdatedZip(EnteredZip);
        SetZip(false);
    }
    else{
        SetZip(true);
    }
  }

  const GenderChange=(event)=>{
    const EnteredGender=event.target.value;
    UpdatedGender(EnteredGender);
  }

  const CheckChange=(event)=>{
    const EnteredCheck=event.target.checked;
    UpdatedChecking(EnteredCheck);
  }

  const SubmitSuccess=(event)=>{
    event.preventDefault();
    if(!passError && !AddrError && !EmailError && !ZipError){
        RegistrationSuccess(email,pass,addr,city,state,zip,Gender,checking)
    }
  }

  const RegistrationSuccess=async(email,pass,addr,city,state,zip,Gender,checking)=>{
    const response=await fetch('http://localhost:3000/Registration',{
        method:"POST",
        header:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email,
            pass,
            addr,
            city,
            state,
            zip,
            Gender,
            check: checking? "Checked" :"not checked"

        })
    })
    const data=await response.json();
    SetUserData(data);
  }


  return (
    <>
    {
        Object.keys(userData).length > 0 ?<><h2>Welcome to Home Page</h2></>:
      <>
        <form className="row g-3" onSubmit={SubmitSuccess}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="text" className="form-control" id="inputEmail4" onChange={EmailChange}/>
          </div>
          {EmailError && <span style={{color:"red"}}>please enter the valid email id</span>}
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              onChange={PassChange}
            />
          </div>
          {passError && <span style={{color:"red"}}>Password should contain 12 character and special characters and numbers</span>}
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              onChange={AddressChange}
            />
          </div>
          {AddrError && <span style={{color:"red"}}>please enter the valid Address</span>}
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" onChange={CityChange}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select" onChange={StateChange} value={state}>
              <option>Karnataka</option>
              <option>Andhra Pradesh</option>
              <option>Telangana</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Goa</option>
            </select>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
              value='Male'
              checked={Gender==='Male'}
              onChange={GenderChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked"
              defaultChecked=""
              value='Female'
              checked={Gender==='Female'}
              onChange={GenderChange}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Female
            </label>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" onChange={ZipChange}/>
          </div>
          {ZipError && <span style={{color:"red"}}>please enter the valid zip code</span>}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                checked={checking}
                onChange={CheckChange}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </>
    }
    </>
  );
};
export default ControlRegistration;
