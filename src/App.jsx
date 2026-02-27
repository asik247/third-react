import React from 'react';
import Friends from './Components/Friends';
const App = () => {
  const myFriends = [
    {id:1,name:'ar',age:20,hobbie:'codding'},
    {id:2,name:'ar',age:20,hobbie:'codding'},
    {id:3,name:'ar',age:20,hobbie:'codding'},
  ]
  const handle = ()=>{
    alert("btn clicked")
  }
  const addNumber = (num) =>{
    const newNumber = num + 10;
    alert(newNumber)
  }
  return (
    <div>
      <h1>hi iam third react</h1>
      {
        myFriends.map(friend=><Friends key={friend.id}  friend={friend}></Friends>)
      }
      <button onClick={handle}>Click Me</button>
      <button onClick={function handle2(){
        alert("btn 2 clicked")
      }}>Click Me 2</button>
      <button onClick={()=>addNumber(10)}>Add Number</button>
    </div>
  );
};
export default App;