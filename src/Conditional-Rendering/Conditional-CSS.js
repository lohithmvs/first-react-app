
const CondCss=()=>{
    const isLogin=false;
    return(
        isLogin? <>
            <h2 style={{color:"green"}}>Welcome to Login Page</h2>
        </>
        :<>
            <h2 style={{color:"red"}}>Please Register</h2>
        </>
    )
}

export default CondCss;