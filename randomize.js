//function that displays a random number
function displayRandomNumber() 
{    
   let y = Math.random()
   document.getElementById("result").value = y 
}
//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
}
