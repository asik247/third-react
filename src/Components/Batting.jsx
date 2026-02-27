import React, { useState } from 'react';

const Batting = () => {
    const [runs,setRuns] = useState(0)
    const forHid = ()=>{
        setRuns(runs + 4);
    }
    return (
        <div>
            {
                runs >=50 && <p>Congrase</p>
            }
            <h1>Tanzid Tamim</h1>
            <p>Runs:{runs}</p>
            <button onClick={forHid}>Four Hit</button>
        </div>
    );
};

export default Batting;