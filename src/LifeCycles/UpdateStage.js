import { Component } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
class UpdateStage extends Component{
    constructor(){  
        super();
        this.state={
            obj:[],
            loader:true,
            myColor:"red"
        }
    }

    fetchCapital=async()=>{
        let response= await axios.get('https://restcountries.com/v3.1/all');
        if(response.status===200){
            this.setState({
                obj:response.data,
                loader:false
            })
        }
    }

    componentDidMount(){
        this.fetchCapital();
    }
    shouldComponentUpdate(){
        return false;
    }
    static getDerivedStateFromProps(props){
        return{ myColor:props.col}
    }
    getSnapshotBeforeUpdate(prevState,curState){
        console.log(prevState,curState);
        return null;
    }
    componentDidUpdate(){
        document.title=`${this.state.myColor}`
    }


    render(){
        return(
            <>
                {
                    this.state.loader?<><h2 style={{color:this.state.myColor}}>Data is in the server</h2></>:<>
                    <Dropdown as={ButtonGroup}>
                    <Button variant="success">Split Button</Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        {
                            this.state.obj.map(val=>{
                                return(
                                    <>
                                        <Dropdown.Item href="#/action-1">{val.capital}</Dropdown.Item>
                                    </>
                                )
                            })
                        }
                        
                    </Dropdown.Menu>
                    </Dropdown>
                    </>
                }
                
            </>
        )
    }
}
export default UpdateStage;