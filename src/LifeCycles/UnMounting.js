import { Component } from "react"
class UnmountingStage extends Component{
    constructor(){
        super();
        this.state={
            isChild:true
        }
    }

    ChildMan=()=>{
        this.setState({
            isChild:!this.state.isChild
        })
    }
    render(){
        return(
            <>
                {
                    this.state.isChild?<>
                        <Child/>
                    </>:<>
                        <h3>No child Found</h3>
                    </>
                }
                <button onClick={this.ChildMan}>Click Me</button>
            </>
        )
    }
}


class Child extends Component{
    componentWillUnmount(){
        alert('removing element');
    }
    render(){
        return(
            <>
                <div>UnMounting Stage</div>
            </>
        )
    }
}
export default UnmountingStage;