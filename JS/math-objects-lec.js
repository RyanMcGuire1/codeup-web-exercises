//Math.random()
let randomNum = Math.random() * 10;
console.log(randomNum);
// Pre-exercise warmup:
//        Write a method to find a random number within a range of 2 numbers (min and a max)
//          HINT: the min and max should be passed into the method as parameters

function range(min, max){
   return Math.random() * (min - max) + min
}

console.log(range(2000, 3000));