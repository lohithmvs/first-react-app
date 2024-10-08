import axios from "axios"
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { ReducerUse } from "../UseReducer/todoHelper";

const AddCart=()=>{
    const [FakeData,UpdatedFake]=useState([]);

    const FetchFake=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products");
        const data1=response.data;
        const data2=data1.map((val)=>{
            return ({...val,Qty:1})
        })
        UpdatedFake(data2);
        console.log(data2);
    }
    useEffect(()=>{
        FetchFake();
    },[])

    const IncreasePlus=(id)=>{
        const FakeData1=FakeData.map(val=>{
            if(val.id===id){
                return ({...val,Qty:val.Qty+1})
            }
            else{
                return ({...val})
            }
        })
        UpdatedFake(FakeData1)
    }
    const reduceMinus=(id)=>{
        const FakeData1=FakeData.map(val=>{
            if(val.id===id){
                return ({...val,Qty:val.Qty-1})
            }
            else{
                return ({...val})
            }
        })
        UpdatedFake(FakeData1)
    }
    return(
        <>
            {
                FakeData.length>0?<>
                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Image</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>Total price</th>
                                    </tr>
                                </thead>
                        {

                            FakeData.map(val=>(
                                <>
                                {
                                    val.Qty &&   <>
                                    <tbody>
                                        <tr>
                                            <td>{val.title}</td>
                                            <td>{val.description}</td>
                                            <td>{val.category}</td>
                                            <td><img src={val.image} height={50} width={50}/></td>
                                            <td>{val.price}</td>
                                            <td><button style={{height:"25px",width:"25px",fontSize:"15px"}} onClick={()=>reduceMinus(val.id)}>-</button> {val.Qty}<button style={{height:"25px",width:"25px",fontSize:"15px"}} onClick={()=>IncreasePlus(val.id)}>+</button></td>
                                            <td>{Math.round(val.Qty*val.price,4)}</td>
                                        </tr>

                                    </tbody>
                                </>
                                }
                                </>
                                
                            ))
                        }
                        <tr>
                            <td colSpan={6}>Total</td>
                            <td><h4>{Math.round(FakeData.reduce((acc,val)=>{
                                return acc+(val.price*val.Qty)
                            },0))}</h4></td>
                        </tr>
                </Table>
                </>:<>

                </>
            }
        </>
    )
}
export default AddCart;