import { Component } from "react";

class SquareClass extends Component{
    state={
        arr:[1]
    }

    SquarePlus=()=>{
        const arr1=[...this.state.arr,1]
        this.setState({
            arr:arr1
        })
    }
    SquareMinus=()=>{
        const arr2=[...this.state.arr]
        arr2.pop()
        this.setState({
            arr:arr2
        })
    }

    render(){
        return(
            <>
                <button style={{margin:"20px"}} onClick={this.SquarePlus}>Add a Square</button>
                <button style={{margin:"20px"}} onClick={this.SquareMinus}>remove a Square</button>
                {
                    this.state.arr.map((val,index)=>(
                            index % 2===0?<div style={{height:"50px",width:"50px",border:"2px solid black",margin:"30px",background:"blue"}}></div>:
                            <div style={{height:"50px",width:"50px",border:"2px solid black",margin:"30px",background:"red"}}></div>
                    ))
                }  
            </>
        )
    }
}
export default SquareClass;