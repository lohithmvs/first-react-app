import { useReducer } from "react"
import { actionTypes, initialState, reducer } from "./helper"
import { type } from "@testing-library/user-event/dist/type";

const UseReducerEx1=()=>{
    const [currentState,dispatchFunction]=useReducer(reducer,initialState);

    const bookTicketHandler=()=>{
        dispatchFunction({
            type:actionTypes.BOOK_TICKETS,
            payload:10
        })
    }
    const cancelTicketHandler=()=>{
        dispatchFunction({
            type:actionTypes.CANCEL_TICKETS,
            payload:2
        })
    }
    const changeMovieHandler=()=>{
        dispatchFunction({
            type:actionTypes.CHANGE_MOVIE,
            payload:"kalki 2"
        })
    }

    return(
        <>
            <h3>Total Number of tickets {currentState.totalTickets}</h3>
            <h3>Number of available tickets {currentState.currentAvailableTickets}</h3>
            <button onClick={bookTicketHandler}>book tickets</button>
            <button onClick={cancelTicketHandler}>cancel tickets</button>
            <h4>Current movie {currentState.movieName}</h4>
            <button onClick={changeMovieHandler}>change movieName</button>
        </>
    )
}
export default UseReducerEx1;