import { isContentEditable } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SearchIpl.css'

class SearchIpl extends Component{
    constructor(){
        super();
        this.state={
            items:[],
            name:""
        }
    }

    changeTitle=async()=>{
        const response= await axios.get('https://fakestoreapi.com/products');
        this.setState({
            items:response.data
        })
    }

    chaTitle=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    componentDidMount(){
        this.changeTitle()
    }


    render(){
        return(
            <>
                <input type="text" onChange={this.chaTitle} placeholder="search" style={{margin:"40px"}}/>
                <div className="searchIpl">   
                {
                    this.state.items.filter(val=>(
                        val.title.toLowerCase().includes(this.state.name.toLowerCase()))).map(val1=>(
                            <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={val1.image} />
                                <Card.Body>
                                    <Card.Title>{val1.title}</Card.Title>
                                    <Card.Text>{val1.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            </>
                        ))
                    
                }
                </div>
                
            </>
        )
    }
}
export default SearchIpl;