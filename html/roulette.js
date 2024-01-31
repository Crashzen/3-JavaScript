"use strict";

function MyRand(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function WheelSpin()
{
    let wheel=[0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];
    let index=MyRand(0,37);

    //For number
    let number;
    if(index == 19)
    {
        number = "00";
    }
    else
    {
        number = wheel[index];
    }
    //

    //For color
    let color;
    if(index % 2 == 0)
    {
        color = "RED";
    }
    else
    {
        color ="BLACK";
    }
    //

    //For even/odd
    let parity;
    if(index == 19)
    {
        parity = "EVEN";
    }
    else if(index == 0)
    {
        parity ="ODD";
    }
    else
    {
        if(wheel[index] % 2 == 0)
        {
            parity = "EVEN";
        }
        else
        {
            parity = "ODD";
        }
    }
    //

    //For pass/fail
    let grade;
    if(index == 19)
    {
        grade = "PASSED";
    }
    else if(index == 0)
    {
        grade ="FAILED";
    }
    else
    {
        if(wheel[index] > 18)
        {
            grade = "PASSED";
        }
        else
        {
            grade = "FAILED";
        }
    }
    //

    let scroll_box = document.getElementById("scrollbox");
    let paragraph = document.createElement("div");


    let roul_node1 = document.createTextNode(number);
    let roul_node2 = document.createTextNode(color);
    let roul_node3 = document.createTextNode(parity);
    let roul_node4 = document.createTextNode(grade);
    let space0 = document.createTextNode(" ");
    let space1 = document.createTextNode(" ");
    let space2 = document.createTextNode(" ");

    let result = [roul_node1, space0, roul_node2, space1, roul_node3, space2, roul_node4]

    for(let i=0;i<7;i++)
    {
        paragraph.appendChild(result[i])
    }
    paragraph.className = "para";

    scroll_box.appendChild(paragraph);
    scroll_box.scrollTop = 999999999;
}