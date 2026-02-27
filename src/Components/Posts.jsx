import React, { use } from 'react';

const Posts = ({allDatas}) => {
    const datas = use(allDatas);
    console.log(datas);
    return (
        <div>
            <h1>Iam Post here</h1>
        </div>
    );
};

export default Posts;