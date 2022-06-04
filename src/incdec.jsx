import { useState } from "react";

const IncDec = () => {
const [ counting,setCounting ]=useState(0);
const handleIncrement = () => {
    setCounting(counting +1 );
}
const handleDecrement=()=>{
    if(counting>0){
      setCounting(counting -1 );
    }
}
  return (
      <>
        <button  onClick={handleIncrement} className="btn btn-success btn-sm">++</button> &nbsp;
        <button onClick={handleDecrement} className="btn btn-danger btn-sm">--</button>
        <hr/>
        <h2>{counting}</h2>
              
      </>
  )
}

export default IncDec;