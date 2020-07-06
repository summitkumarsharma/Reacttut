
// import Greet from './Greet';
// import add, { sub, mul, div } from './Calc'
// <Greet/>
// <>
//   <p> The sum of two nunbers = {add(40, 4)}</p>
//   <p> The sub of two nunbers = {sub(40, 4)}</p>
//   <p> The mul of two nunbers = {mul(40, 4)}</p>
//   <p> The div of two nunbers = {div(40, 4)}</p>
// </>


import React from 'react';
import Netflix from './Netflix';
import AmazonPrime from './AmazonPrime';

const FavSeries = "Netflix";

const App = () => {
  return (
    <>
      {FavSeries === "Netflix" ? <Netflix /> : <AmazonPrime />}
    </>
  );
}

export default App;


