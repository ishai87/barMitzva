var b1= document.getElementById("vmButton");
b1.onclick=function() {

  var byear=document.getElementById("byinput").value;
  if (byear=="זרעין"){
    window.location.href="kidspage.html";
    }
    else {
    window.alert("טעות.. נסו שוב");
    }
}
