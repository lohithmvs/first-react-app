import { Component } from "react"
import Table from 'react-bootstrap/Table';

class FetchAwait extends Component{
    state={
        recipes1:[],
        loader:false,
        error:false
    }
    FetchRecipe=async()=>{
        try{
            const response=await fetch("https://dummyjson.com/recipes");
            const data=await response.json();
            const data1=data.recipes;
            this.setState({
                recipes1:data1,
                
            })
        }catch(err){
            this.setState({
                error:true
            })
            
        }
        finally{
            this.setState({
                loader:true
            })
        }
    }
    componentDidMount(){
        this.FetchRecipe();
    }
    render(){
        return(
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>instructions</th>
                            <th>ingredients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.loader? <>
                                {
                                    this.state.recipes1.map(val=>{
                                        return(
                                            <>
                                            <tr>
                                            <td>{val.name}</td>
                                            <td>
                                            <ol>
                                            {val.instructions.map(val1=>(
                                                <li>
                                                {val1}
                                                </li>
                                                
                                            ))}
                                            </ol>
                                            </td>
                                            <td>
                                            <ol>
                                            {val.ingredients.map(val2=>(
                                                <li>
                                                {val2}
                                                </li>
                                            ))
                                            }
                                            </ol>     
                                            </td>
                                            </tr>
                                            </>
                                        )
                                        
                                        })
                                }
                            </>
                            : <>
                                <h3>data is loading</h3>
                            </>
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}
export default FetchAwait;