import React, { use } from 'react';

const Users = ({allData}) => {
    console.log(allData);
    const datas = use(allData)
    console.log(datas);
    return (
        <div>
            <h1>User Here:{datas.length}</h1>
            {
                datas.map(({id,name,email})=>(
                    <div key={id}>
                        <h3>{name}</h3>
                        <p>{email}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;

