import React, { useState } from 'react';

const Input = () => {
    const [text,setText] = useState('Hello');
    const handleChange = (e)=>{
       setText(e.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} value={text} type="text" name="" id="" />
            <p>You Type: {text}</p>
            <button onClick={()=>setText('Hello')}>Reset</button>
        </div>
    );
};

export default Input;