import React from 'react';

const Friends = ({friend,showButton}) => {
    const {id,name,age,hobbie} = friend;
    const greating = ()=>{
        alert("hi md")
    }
    // console.log(friend);
    return (
        <div>
            {
                showButton && (
                     <button onClick={greating}>click me</button>
                )
            }
            <h1>Name:{name}</h1>
            <h1>age:{age}</h1>
            <h1>hobbie:{hobbie}</h1>
            <h1>id:{id}</h1><br />
           
        </div>
    );
};

export default Friends;