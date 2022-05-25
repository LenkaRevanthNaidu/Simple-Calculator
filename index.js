function clearScreen(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value +=value;
}
function calculate(){
    var s=document.getElementById("result").value;
    var r=eval(s);
    document.getElementById("result").value=r;
}