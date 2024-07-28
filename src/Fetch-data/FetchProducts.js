import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Component } from "react";

class FetchProducts extends Component{
    state={
        products:[],
        loader:true
    }
    fetchPro=()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>this.setState({products:data,loader:false}))
    }
    render(){
        return(
            <>
                <button onClick={this.fetchPro}>Add Products</button>
                {
                    this.state.loader? <><h2>please wait loading...</h2></>:
                    <>
                    {
                        this.state.products.map(val=>{
                            return(
                                <>
                                <h2>{val.title}</h2>
                                <Progress data2={val.rating.rate} style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}/>
                                </>
                            )
                        })
                    }
                    </>
                        
                    
                }
            </>
        )
    }
}
export default FetchProducts;
const prog=(trop)=>{
    trop=(trop/5)*100
    return trop;
}
function Progress(trop1) {
  return (
    <>
        <ProgressBar now={prog(trop1.data2)} label={`${trop1.data2}`} />
    </>
  )
}