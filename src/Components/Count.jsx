import React, { useState } from 'react';

const Count = () => {
    // const [state, setState] = useState(initialState)
    const [count,setCount] = useState(0)
    // console.log(count);
    const add = ()=>{
        // alert("btn clicked")
      const newCoutn =   count + 1;
        setCount(newCoutn)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default Count;