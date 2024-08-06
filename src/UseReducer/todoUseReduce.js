import { useReducer, useState } from "react"
import { initialTodo, ReducerUse, todoTypes } from "./todoHelper"
import { type } from "@testing-library/user-event/dist/type";

const TodoUseReduce=()=>{

    const [currentState,dispatchFunction]=useReducer(ReducerUse,initialTodo);
    const [data2,UpdatedData2]=useState("");
    const [userName,setUsername]=useState("");

    const TodoData=(event)=>{
        const a=event.target.value;
        UpdatedData2(a);
    }

    const SubmitTodo=(event)=>{
        event.preventDefault();
        dispatchFunction({
            type:todoTypes.ADD_TODO,
            payload:[...currentState.todoArray,data2]
        })
    }

    const deleteTodo=(ind)=>{
        const arr1=currentState.todoArray.filter((_,index)=>(
            ind!=index
        ))
        dispatchFunction({
            type:todoTypes.DELETE_TODO,
            payload:arr1
        })
    }
    return(
        <>
            <h2>Todo List</h2>
            <form>
                <input type="text" onChange={TodoData}/>
                <input type="submit" onClick={SubmitTodo}/>
            </form>
            {
                currentState.todoArray.length>0?<>
                    {
                        currentState.todoArray.map((val,index)=>(
                            <>
                                <h4>{val}</h4>
                                <button onClick={()=>deleteTodo(index)}>Delete</button>
                            </>
                        ))
                    }
                </>:<>
                    <div></div>
                </>
            }
        </>
    )
}
export default TodoUseReduce;