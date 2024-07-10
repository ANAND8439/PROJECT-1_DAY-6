//math.random 0 to 1 //0.01(1) - 0.99*100=(99) +1
var random=Math.floor(Math.random()*100)+1; //54
//var to calculate how many attempts
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++; //1
    var guess=parseInt(document.getElementById('guessinput').value); //54
    if(guess===random){
        display("ITHA KANDUPUDIKA AVOLO THADIYA-"+ attempt);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("ROMBA KAMMIYA IRUKU");
    }
    else if(guess>random){
        display("ROMBA ATHIGAMA IRUKU");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;}