"use strict";
//console.log("while working");

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have this many cones to sell");

do{
   var conesPurchased = Math.floor(Math.random() * 5) + 1;
    if(conesPurchased > allCones){
        var outOfStock = "Can't sell you " + conesPurchased + ". I only have " + allCones
        console.log(outOfStock);
    }else{
        allCones -= conesPurchased;
        var soldCones = conesPurchased + "cones sold..." + allCones + " cones to go";
        console.log(soldCones);
    }
}while(allCones > 0);

