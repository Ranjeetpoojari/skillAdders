var a = document.getElementById("mega-menu");
function program() {
 if(a.classList.contains("d-hidden"))
 {
     a.classList.remove("d-hidden")
 }
    else
    {
        a.classList.add("d-hidden")
    }
}
function pronon(){
    a.classList.add("d-hidden")
}
function pro(){
    a.classList.remove("d-hidden");
}
var b =document.querySelector(".btn1")
function disablebtn(){
    if(b.classList.contains("disabled"))
    {
        b.classList.remove("disabled")
    }
       else
       {
           b.classList.add("disabled")
       }
    }
    
        var d =document.querySelector("dropdown")
      var f = window.screen.width("990px");
        if(f)
        {
            alert("Hellow world")
        }
        else{
            alert("size is not match")
        }
    