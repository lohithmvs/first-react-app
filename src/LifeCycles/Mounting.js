import { Component } from "react";
import axios from "axios";
class MountingClass extends Component{
    constructor(){
        super();
        this.state={
            cook:[],
            loader:true,
            myColor:"blue"
        }
    }

    static getDerivedStateFromProps(props){
        return{ myColor:props.myCol}
    }
    fetchRec=async()=>{
        try{
            const response=await axios.get('https://dummyjson.com/recipes');
            const data1=response.data.recipes;
            if(response.status===200){
                this.setState({
                    cook:data1
                })
            }
        }catch(err){
            this.setState({
                loader:true
            })
        }finally{
            this.setState({
                loader:false
            })
        }
        
    }
    componentDidMount(){
        this.fetchRec();
    }

    render(){
        return(
            <>
                {
                    this.state.loader?<>
                        <h2 style={{color:this.state.myColor}}>Hello</h2>
                    </>:
                    <>
                        {   
                            this.state.cook.map(val=>{
                                return(
                                    <>
                                        <h2 style={{color:this.state.myColor}}>Hello</h2>
                                        <h3>{val.cuisine}</h3>
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
export default MountingClass;