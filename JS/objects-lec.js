"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */
var rubberDuck = {
    color: "yellow",
    role: "emotional support",
    name: "cody"
};

console.log(rubberDuck);

/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */
// USe dot Notation to assign new properties or access existing ones.
var myPhone = new Object();
myPhone.color = "black";
myPhone.model = "iPhone 11";
myPhone.storage = "512 gb";
myPhone.ring = function(){
    console.log("Ring Ring!");
}
console.log(myPhone);
myPhone.ring();
var myPhone = {
    color: "black",
    model: "iPhone 11",
    storage: "512 gb",
    ring: function(){
        console.log("ring ring");
    },
    picture: function(){
        console.log("Take picture!");
    }

};

console.log(myPhone.color);
console.log(myPhone.model);
console.log(myPhone.storage);
myPhone.ring();



/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */
var myMAc = {
    color: "Space Grey",
    model: "MacBook Pro",
    storage: "1 Tb",
    siri: function(){
        console.log("annoying");
    }
}
console.log(myMAc.color);
console.log(myMAc.model);
console.log(myMAc.storage);
myMAc.siri();


/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */
myPhone.name = {
    firstname: "Ryan",
    lastname: "McGuire",
}
console.log(myPhone);
console.log(myPhone.name.firstname);


/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */
myMAc.folders = ["documents", "downloads", "codeup"];
console.log(myMAc);
myMAc.folders.forEach(function(folder){
    console.log(folder);
})
/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */
myMAc.login = {
    username: "codeytheduck",
    fakepassword: "quackquack",
    email: "cody@coddeup.com"
};
console.log(myMAc.login);
/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

myPhone.call = function(){
    console.log("Dialing");
};

myPhone.call();
/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */
myPhone.powerOn = function(){
    console.log("Powering On");
};
console.log(myPhone.powerOn());
/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function(){
    console.log("Current user: " + this.name.firstname + " " +this.lastname);
};
myPhone.currentUser();

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */
myMAc.currentUser = function (){
    console.log("Current: " + this.login.username + "|" + this.login.email);
}



/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

var chooseYourFighter = [
    {
        firstName: "Spongebob",
        lastName: "Squarepants",
    },
    catchPhrase: function(){
    return "I'm Spongebob";
    }
    {
        firstName:"Patrick",
        lastName: "Star",
    },
    {
        firstName: "Eugene",
        lastName: "Krabs",
    },
    {
        firstName: "Squidward",
        lastName: "Tentacles",
    }];
chooseYourfighter.forEach(function (fighter){
    console.log(fighter.name);
});