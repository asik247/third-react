import React, { useState } from 'react';

const Count = () => {
    const [age,seAge] = useState(42);
    const [name,setName] = useState('Taylor');
    const handleClick = ()=>{
        setName('Robin')
    }
    const update = ()=>{
        seAge(age + 1);
    }
    return (
        <div>
            <h1>Name:{name}</h1>
            <button onClick={handleClick}>Set Name</button>
            <button onClick={update}>You Pressed me {age} times</button>
        </div>
    );
};

export default Count;