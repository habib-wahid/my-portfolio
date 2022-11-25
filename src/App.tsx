import React from 'react';

function App() {

  const add=(a:number,b:number)=>{
    return a+b;
  }

  return (
    <div className="App">
      <h3>My Portfolio</h3>
      Sum of two numbers is {add(2,3)}
    </div>
  );
}

export default App;
