import React, { Suspense } from 'react';
import Friends from './Components/Friends';
import Count from './Components/Count';
import Input from './Components/Input';
import Input2 from './Components/Input2';
import Batting from './Components/Batting';
import Users from './Components/Users';
import Posts from './Components/Posts';





// fetch data code start here;
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  // return (await res).json()
  return res.json()
}
// all post fetch code start here;
const fetchDatas = async () =>{
  const res =await fetch("https://openapi.programming-hero.com/api/levels/all");
  return res.json()
}










const App = () => {
  const allData = fetchData()
  // Post code here;
  const allDatas = fetchDatas();
  console.log(allDatas);
  const myFriends = [
    { id: 1, name: 'ar', age: 20, hobbie: 'codding' },
    { id: 2, name: 'ar', age: 20, hobbie: 'codding' },
    { id: 3, name: 'ar', age: 20, hobbie: 'codding' },
  ]
  const handle = () => {
    alert("btn clicked")
  }
  const addNumber = (num) => {
    const newNumber = num + 10;
    alert(newNumber)
  }

  return (
    <div>
      <h1>hi iam third react</h1>
      {
        myFriends.map(friend => <Friends key={friend.id} friend={friend}></Friends>)
      }
      <button onClick={handle}>Click Me</button>
      <button onClick={function handle2() {
        alert("btn 2 clicked")
      }}>Click Me 2</button>
      <button onClick={() => addNumber(10)}>Add Number</button>
      <br />
      <Count></Count><br /><br />
      <Input></Input>
      <br />
      <Input2></Input2> <br /><br />
      <Batting></Batting>
      <br />
      <br />
      <br />

      <Suspense fallback={<h1>Loadding............</h1>}>
        <Users allData = {allData}></Users>
      </Suspense>
      <br /><br />
      <Suspense fallback={<p>Post Comming Soon...</p>}>
        <Posts allDatas = {allDatas} ></Posts>
      </Suspense>
    </div>
  );
};
export default App;