"use strict";

console.log("Spinning...")

function MyRand(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let wheel=[0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];
let index=MyRand(0,37);

//For number
if(index == 19)
{
    console.log("00");
}
else
{
    console.log(wheel[index]);
}
//

//For color
if(index % 2 == 0)
{
    console.log("RED");
}
else
{
    console.log("Black");
}
//

//For even/odd
if(index == 19)
{
    console.log("EVEN");
}
else if(index == 0)
{
    console.log("ODD");
}
else
{
    if(wheel[index] % 2 == 0)
    {
        console.log("EVEN");
    }
    else
    {
        console.log("ODD");
    }
}
//

//For pass/fail
if(index == 19)
{
    console.log("PASSED");
}
else if(index == 0)
{
    console.log("FAILED");
}
else
{
    if(wheel[index] > 18)
    {
        console.log("PASSED");
    }
    else
    {
        console.log("FAILED");
    }
}
//