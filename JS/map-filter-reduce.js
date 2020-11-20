
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const newArray = users.filter(function(x){
return   x.languages.length > 2;
})
console.log(newArray);

const stringArray = users.map(function(x){
    return x.email
})
console.log(stringArray);

const totalYears = users.reduce(function(currentValue,currentNumber){
    return currentValue + currentNumber.yearsOfExperience / users.length;
},0);
console.log(totalYears);

const longestEmail = stringArray.reduce(function(currentValue,currentNumber){
        if(currentValue.length > currentNumber.length){
           currentNumber = currentValue;
        }
        return currentNumber;
},0)
console.log(longestEmail);


const namesList = users.reduce(function(currentValue,currentWord){
   return ` ${currentValue} ${currentWord.name},`;
}," ")
console.log(namesList);