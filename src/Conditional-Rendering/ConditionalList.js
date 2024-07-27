import CustomList from "../List/CustomList";

const List=["Rajasthan Royals","Chennai Super Kings","Delhi Capitals","Gujarat Titans","Kolkata Knight Riders","Mumbai Indians","Royal Challengers Bengaluru","Sunrisers HyderabadSunrisers Hyderabad"];
const List1=[]; 
const CondList=()=>{
    if(List1.length===0){
        return(
            <>
                <h2>There is no data in the List</h2>
            </>
        )
    }
    else{
        return(
            <>
                <CustomList arr={List}/>
            </>
        )
    }
}
export default CondList;