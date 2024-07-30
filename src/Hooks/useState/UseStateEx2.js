import { useState } from "react"

const UseStateEx2=()=>{
    const [TodoList,UpdatedTodo]=useState([{
        period:"Morning",
        todo:"Wake up at 8"
    },
    {
        period:"Afternoon",
        todo:"Have Lunch"
    }])

    const AddTodo=()=>{
        const newTodo={
            period:"Evening",
            todo:"Go to Gym"
        }
        const newTodo1=[...TodoList,newTodo];
        UpdatedTodo(newTodo1);
    }

    const removeTodo=(index)=>{
        const removeOne=TodoList.filter((_,ind)=>(
            ind!==index
        ))
        UpdatedTodo(removeOne)
    }

    return(
        <>
            <h2>Todo List</h2>
            <button onClick={AddTodo}>AddTodo</button>
            {
                TodoList.map((val,index)=>(
                    <>
                        <h4>It's already{val.period}</h4>
                        <h4>{val.todo}</h4>
                        <button onClick={()=>removeTodo(index)}>Remove Todo</button>
                    </>
                    
                ))
            }
            
        </>
    )
}
export default UseStateEx2;