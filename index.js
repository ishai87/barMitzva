var b1= document.getElementById("q");
b1.onclick=function() {
  var x1=document.getElementById("a").value;
   if (x1=="לפופית"){
    window.location.href="lapofit.html";
  }
  else if (x1=="סביון"){
    window.location.href="savion.html";
  }
  else if (x1=="נורית"){
    window.location.href="norit.html";
  }
  else if (x1=="פרג"){
      window.location.href="parag.html";
  }
  else if (x1=="יסמין"){
    window.location.href="jasmin.html";
  }
  else if (x1=="חצב"){
    window.location.href="hatzav.html";
  }
  else if (x1=="כלנית"){
    window.location.href="kalanit.html";
    }
  else if (x1=="רקפת"){
    window.location.href="rakefet.html";
  }
  else if (x1=="ורד"){
    window.location.href="vered.html";
    }
    else{window.alert("אין תחנה כזאת.. נסו שוב");}


}
