
var b1= document.getElementById("q");
b1.onclick=function() {

  var x1=document.getElementById("a").value;
  if (x1=="ענבל פיזרו"){
    window.location.href="kalanit1.html";
    }
  else if (x1=="ענבל פזרו"){
      window.location.href="kalanit1.html";
  }
  else {
    window.alert("טעות.. נסו שוב");
  }
}
