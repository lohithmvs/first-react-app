import { act } from "react"

export const actionTypes={
    BOOK_TICKETS:"BOOK_TICKETS",
    CANCEL_TICKETS:"CANCEL_TICKETS",
    CHANGE_TOTAL_TICKETS:"CHANGE_TOTAL_TICKETS",
    CHANGE_MOVIE:"CHANGE_MOVIE"
}
export const initialState={
    MovieTheatre:"PVR",
    location:"InOrbit mall",
    movieName:"kalki",
    totalTickets:100,
    bookedTickets:26,
    currentAvailableTickets:74
}
export const reducer=(state,action)=>{
    switch(action.type){
        case actionTypes.BOOK_TICKETS:
            return {...state,bookedTickets:state.bookedTickets+action.payload,currentAvailableTickets:state.currentAvailableTickets-action.payload}
        case actionTypes.CANCEL_TICKETS:
            return {...state,bookedTickets:state.bookedTickets-action.payload,currentAvailableTickets:state.currentAvailableTickets+action.payload}
        case actionTypes.CHANGE_TOTAL_TICKETS:
            return {...state,totalTickets:state.totalTickets+action.payload}
        case actionTypes.CHANGE_MOVIE:
            return { ...state, movieName: action.payload };
        default:
            return state
    }
}