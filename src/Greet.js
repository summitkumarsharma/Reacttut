import React from 'react';

function Greet() {

    // creating a Greet Website
    const name = "Sumit";
    let greet;
    const currDate = new Date().getHours();

    // const currTime = new Date().toLocaleTimeString();

    // Internal  CSS
    const gcolor = {};

    if (currDate >= 1 && currDate < 12) {
        greet = "Good Morning";
        gcolor.color = "green";
    } else if (currDate >= 12 && currDate < 17) {
        greet = "Afternoon";
        gcolor.color = "yellow"
    } else if(currDate >= 17 && currDate < 20){
        greet = "Good Evening";
        gcolor.color = "Brown";
    }else {
        greet = "Good Night";
        gcolor.color = "red";
    }
    return (
        <>
            <div className="cont">

                <h1>Welcome {name} to the React Javascript,<span style={gcolor}>{greet}</span></h1>

            </div>
        </>

    );

}

export default Greet;