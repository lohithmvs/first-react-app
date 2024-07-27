import { Component } from "react";

class TodoClass extends Component{
    state ={
        todoist1:["good evils more than that","hello from the rango"]
    }
    addTodo=()=>{
        const todoist2=[...this.state.todoist1,"kali released"]
        this.setState({
            todoist1:todoist2
        })
    }
    render(){
        return(
            <>
            <h3>I am a todo Component</h3>
            <ol>
            {
                this.state.todoist1.map((val,index)=>(
                    <li key={index}>{val}</li>
                ))
            }
            </ol>
            <button onClick={this.addTodo}>Add Todo</button>

            
        </>
        )
        
    }
}
export default TodoClass;