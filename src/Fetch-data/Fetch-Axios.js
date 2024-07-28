import { Component } from "react";
import axios from "axios";

class FetchAxios extends Component{
    state={
        country:[],
        loader:false,
        error:false
    }

    fetchCountry=async()=>{
        try{
            const response=await axios.get("https://restcountries.com/v3.1/all");
            if(response.status===200){
                this.setState({
                    country:response.data,
                    loader:true
                })
            }
        }catch(err){
            this.setState({
                error:true
            })
        }
        
    }
    componentDidMount(){
        this.fetchCountry();
    }
    render(){
        return(
            <>
                {
                    this.state.loader?<>
                        {
                            this.state.country.map(val=>(
                                <>
                                    <h3>{val.name.official}</h3>
                                </>
                            ))
                        }
                    </>:<>
                        <h2>data is loading..</h2>
                    </>
                }
            </>
        )
    }
}
export default FetchAxios;