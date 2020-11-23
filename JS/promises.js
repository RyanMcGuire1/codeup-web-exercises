"use strict";

function wait(second){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve()
        },second)
    })
}

// wait(1000).then(() => console.log("You'll see this after 1 second"));
// wait(3000).then(() => console.log("You'll see this after 3 seconds"));


fetch('https://api.github.com/users/RyanMcGuire1/events/public', {headers: {'Authorization':  githubToken}})
    .then(response => response.json())
    .then(response=>{console.log(response[0].created_at)})

