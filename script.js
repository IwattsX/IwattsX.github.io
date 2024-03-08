function opentab(tabName) {

  //Makes the tabs not active so they aren't highlighted
  var elms = document.getElementById("mySidebar").getElementsByTagName("a");
  // console.log(elms);

  for(var k = 0; k<elms.length; k++){
    if(elms[k].id === '#'.concat(tabName)){
      elms[k].classList.add("active");
    }
    else{
      elms[k].classList.remove("active")
    }
  }

  var i;
  var x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  document.getElementById(tabName).style.display = "block";  
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}