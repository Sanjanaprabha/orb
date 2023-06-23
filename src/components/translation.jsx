import React from 'react'
import "./translation.css";

const Translation = ({doStuff,setInput,result}) => {
  return (
    <div>
        <h1>ORB</h1>
        <textarea className="text-area" cols={55} rows={10}onChange={(e)=>setInput(e.target.value)} ></textarea>
        <br/>
        <button className='action-btn' onClick={doStuff}>Submit!</button>
        <h3 className="result-text">{result.length >0 ? result :""}</h3>
    </div>
  );
}

export default Translation



