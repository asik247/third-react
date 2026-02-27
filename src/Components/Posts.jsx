import React, { use } from 'react';
import Post from './Post';

const Posts = ({allDatas}) => {
    const datas = use(allDatas);
    console.log(datas);
    return (
        <div>
            <h1>Iam Post here</h1>
            {
                datas.map(data=><Post key={data.id} data={data}></Post>)
            }
        </div>
    );
};

export default Posts;