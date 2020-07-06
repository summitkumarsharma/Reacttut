import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Using External CSS

// creating a Greet Website
const name = "Sumit";
let greet;
const currDate = new Date().getHours();

// const currTime = new Date().toLocaleTimeString();

// Internal  CSS
const gcolor1 = {
  color : "green"
};

const gcolor2 = {
  color : "yellow"
};
const gcolor3 = {
  color : "red"
};

// / Internal  CSS
// const gcolor = {};

// if(currDate>1 && currDate<12)
// {
//     greet ="Good Morning";
//     gcolor.color = "green";
// }
// else if(currDate>12 && currDate<20){
//     greet ="Afternoon";
//     gcolor.color = "yellow"
// }
// else{
//     greet ="Good Night";
//     gcolor.color = "red";
// }

let gcolor;

if(currDate>1 && currDate<12)
{
    greet ="Good Morning";
    gcolor = gcolor1;
}
else if(currDate>=12 && currDate<20){
    greet ="Afternoon";
    gcolor = gcolor2;
}
else{
    greet ="Good Night";
    gcolor= gcolor3;
}

ReactDOM.render(
  <>
    <div className="cont">
      
      <h1>Welcome {name} to the React Javascript,<span style={gcolor}>{greet}</span></h1>
      
    </div>
  </>,document.getElementById("root")
);

// Using Template Literals -->  <h1> { `Welcome ${name} to the React Javascript,${greet} ${Math.random().toFixed(2)} `}</h1>
