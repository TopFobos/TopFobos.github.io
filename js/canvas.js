"use strict";
var myPainter=document.getElementById("myPainter");
var chooseColor=document.getElementById("chooseColor");
var clearButton=document.getElementById("clearButton");
var myContext=myPainter.getContext("2d");
//myContext.fillRect(100,100,300,300);
var penDown=false;
var penColor="#ff0000";

chooseColor.value=penColor;

chooseColor.onchange=function(){
    penColor=chooseColor.value;
    myContext.beginPath();
    myContext.closePath();
}
clearButton.onclick=function(){
    myContext.beginPath();
    myContext.closePath();
    myContext.fillStyle="rgb(256,256,256)";
    myContext.fillRect(0,0,640,480);
}

myPainter.onmousedown=function(){
    penDown=true;
}
myPainter.onmouseup=function(){
    penDown=false;
}
myPainter.onmousemove=function(event){
    var xpos=event.pageX - myPainter.offsetLeft;
    var ypos=event.pageY - myPainter.offsetTop;
   // myContext.beginPath();
    
    myContext.strokeStyle=penColor;
    if(penDown){
        myContext.lineTo(xpos,ypos)
    }
    else{
        myContext.moveTo(xpos,ypos)
    }
    myContext.stroke();
}