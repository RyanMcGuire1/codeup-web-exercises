//Write a function that prints a Floyd triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// need a loop
// return multiple sequences
// each to be 1 number longer
// each sequence to start where the last one left
// print = console log

function floyd(){
    var row = 1
    for(var i = 1; i <= 10; i++){
        var numberRow = '' + i
        for(var j = 1; j<= row; j++){
            console.log(i);
        }
        row++
    }
}

floyd()