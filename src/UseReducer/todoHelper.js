export const todoTypes={
    ADD_TODO:"ADD_TODO",
    DELETE_TODO:"DELETE_TODO"
}

export const initialTodo={
    todoArray:[]
}

export const ReducerUse=(state,action)=>{
    switch(action.type){
        case todoTypes.ADD_TODO:
            return {...state,todoArray:action.payload}
        case todoTypes.DELETE_TODO:
            return {...state,todoArray:action.payload}
    }
}

