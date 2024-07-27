import { Component } from "react";

class CounterClass extends Component{
    state={
        count:1
    }
    CountPlus=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    CountMinus=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <>
                <button style={{display:"inline-block"}} onClick={this.CountMinus}>-</button>
                <p style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>{this.state.count}</p>
                <button style={{display:"inline-block"}} onClick={this.CountPlus}>+</button>
            </>
            
        )
    }
}
export default CounterClass;