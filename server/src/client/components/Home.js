import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the home component</div>
      <button onClick={() => console.log('Hi There!')}>Press me!</button> 
    </div>
  )  
}

export default Home;
