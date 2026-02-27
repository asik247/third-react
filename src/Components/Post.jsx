import React from 'react';

const Post = ({data}) => {
    console.log(data);
    const {title,body,userId} = data;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <button>{userId}</button>
        </div>
    );
};

export default Post;
/**
 * {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}
 */