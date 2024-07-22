function CustomList(props){
    return(
        <div>
            <ol>
            {
                props.arr.map(val=>(
                    <li>{val}</li>
                ))
            }
            </ol>
        </div>
    )
    
    
}
export default CustomList;