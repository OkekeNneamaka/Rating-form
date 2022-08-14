function changeStyle(clicked_id) {
if(clicked_id=="btn1") {
   let btn1 = document.getElementById("btn1");
    btn1.style.backgroundColor="hsl(25,97%,53%)";
   }
    btn1.style.color="white";

if(clicked_id=="btn2") {
   let btn2 = document.getElementById("btn2");
    btn2.style.backgroundColor="hsl(216, 12%, 54%)";
    btn2.style.color="white";
}

if(clicked_id=="btn3") {
   let btn3 = document.getElementById("btn3");
    btn3.style.backgroundColor="hsl(25,97%,53%)";
    btn3.style.color="white";
}

    if(clicked_id=="btn4") {
      let btn4 = document.getElementById("btn4");
       btn4.style.backgroundColor="hsl(216, 12%, 54%)";
       btn4.style.color="white";
   }

    if(clicked_id=="btn5") {
      let btn5 = document.getElementById("btn5");
       btn5.style.backgroundColor="hsl(25,97%,53%)";
       btn5.style.color="white";
}

}



function getOldStyle(old_id) { 

   if(old_id=="btn1"){
    let button1 = document.getElementById("btn1");
button1.style.backgroundColor="hsl(213, 19%, 18%)";
button1.style.color="hsl(216, 12%, 54%)";
   }

   if(old_id=="btn2"){
let button2 = document.getElementById("btn2");
button2.style.backgroundColor="hsl(213, 19%, 18%)";
button2.style.color="hsl(216, 12%, 54%)";
   }

   if(old_id=="btn3"){
let button3 = document.getElementById("btn3");
button3.style.backgroundColor="hsl(213, 19%, 18%)";
button3.style.color="hsl(216, 12%, 54%)";
   }

   if(old_id=="btn4"){
let button4 = document.getElementById("btn4");
button4.style.backgroundColor="hsl(213, 19%, 18%)";
button4.style.color="hsl(216, 12%, 54%)";
   }

   if(old_id=="btn5"){
let button5 = document.getElementById("btn5");
button5.style.backgroundColor="hsl(213, 19%, 18%)";
button5.style.color="hsl(216, 12%, 54%)";
} 
} 

function clickButton(value_id){
   if(value_id=="btn1"){
      localStorage.setItem("buttonNumber",1);
   }
   if(value_id=="btn2") {
         localStorage.setItem("buttonNumber",2);
   }
   if(value_id=="btn3"){
   localStorage.setItem("buttonNumber",3);
   }
   if(value_id=="btn4") {
      localStorage.setItem("buttonNumber",4);
   }
   if(value_id=="btn5") {
      localStorage.setItem("buttonNumber",5);
   }
}


function getStyle() {
   let button = document.getElementById("btn");
   button.style.color="hsl(25,97%,53%)";
   button.style.backgroundColor="white";
   button.style.fontSize= "15px";
}