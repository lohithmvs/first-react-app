import { useCounter } from "./CustomHooks/useCounter"

const Refresh=()=>{
  const [age,increaseAge]=useCounter(10,2);

  return(
    <>
      <h1>{age}</h1>
      <button onClick={increaseAge}>+</button>
    </>
  )
}
export default Refresh;