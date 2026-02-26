import React from 'react';
import Friends from './Components/Friends';

const App = () => {
  const myFriends = [
    {id:1,name:'ar',age:20,hobbie:'codding'},
    {id:2,name:'ar',age:20,hobbie:'codding'},
    {id:3,name:'ar',age:20,hobbie:'codding'},
  ]
  // console.log(myFriends);
  return (
    <div>
      <h1>hi iam third react</h1>
      {
        myFriends.map(friend=><Friends key={friend.id} showButton = {index===0} friend={friend}></Friends>)
      }
    </div>
  );
};

export default App;