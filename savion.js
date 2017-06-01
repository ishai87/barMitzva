
var b1= document.getElementById("q");
b1.onclick=function() {

  var x1=document.getElementById("a").value;
  if (x1=="מזרח"){
    window.location.href="savion1.html";
    }
  else if (x1=="מיזרח"){
      window.location.href="savion1.html";
    }
    else {
    window.alert("טעות.. נסו שוב");
    }
}
