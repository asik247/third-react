import React from 'react';

const Friends = ({friend}) => {
    const {id,name,age,hobbie} = friend;
    console.log(friend);
    return (
        <div>
            <h1>Name:{name}</h1>
            <h1>age:{age}</h1>
            <h1>hobbie:{hobbie}</h1>
            <h1>id:{id}</h1>
        </div>
    );
};

export default Friends;