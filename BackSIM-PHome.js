var counter = 1;
setInterval(function autonavigator(){
document.getElementById('radio'+counter).checked = true;
counter++;

if(counter>5){
    counter = 1;
}
},5000)