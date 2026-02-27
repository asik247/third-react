import React, { useState } from 'react';

const Input2 = () => {
    const [text,setText] = useState('hi')
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    return (
        <div>
            <input onChange={handleChange} value={text} type="text" name="" id="" />
            <h1>Type:{text}</h1>
            <button onClick={()=>{setText('hi')}}>Reset</button>
        </div>
    );
};

export default Input2;