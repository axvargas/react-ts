import Timer from "./Timer"
import { useState } from 'react';

const ParentTimer = () => {
  const [millis, setMillis] = useState(1000)
  return (
    <>
      <span>Milliseconds {1000}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={()=>setMillis(1000)}
      >1000</button>
      <button
        className="btn btn-outline-success"
        onClick={()=>setMillis(2000)}
      >2000</button>
      <Timer millis={millis}/>
    </>
  )
}

export default ParentTimer