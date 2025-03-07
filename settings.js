function dropSettings() {
    //opens and closes the settings dialog
        var x = document.getElementById("lstSettings");
        var y = document.getElementById("lstDays");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            y.className = y.className.replace("w3-show", "")

            
        } else { 
            var x = document.getElementById("lstSettings");
            var y = document.getElementById("lstColor");
            var z = document.getElementById("chkConfetti")
            z.className = x.className.replace(" w3-show", "");
            y.className = y.className.replace(" w3-show", "");
            x.className = x.className.replace(" w3-show", "");
           
        }
    }
       
function dropColor() {
        
    var x = document.getElementById("lstColor");
    
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        var x = document.getElementById("lstColor");
        x.className = x.className.replace(" w3-show", "");
        
    }
}
     
function getColor(elem){

    var toRem= document.getElementById('styles');
    var name = "css/" + elem + "ColorThemes.css"
    toRem.setAttribute("href", name);
}

function saveColor(){

    var y = document.getElementById("lstColor")
    var x = document.getElementById("lstSettings");
    var radioList = y.querySelectorAll("input[type='radio']");
    for(i=0; i< radioList.length; i++){
        if(radioList[i].checked){
        var colorID = radioList[i].id;
        localStorage.setItem("colorID", colorID);
        }
    }
    y.className = y.className.replace(" w3-show", "");
    x.className = x.className.replace(" w3-show", "");
}

function closeColor(){

    var y = document.getElementById("lstColor")
    var x = document.getElementById("lstSettings");
    
    y.className = y.className.replace(" w3-show", "");
    x.className = x.className.replace("w3-show", "");   
}

function setColorRadio(){
/*Gets id of current themes.css from local storage.
Gets the value of that id. Creates the name of the style sheet
and sets it.*/

    var newStyle= document.getElementById('styles');
    var colorID = localStorage.getItem("colorID");
    var radiobtn = document.getElementById(colorID);
    var value = radiobtn.value;
    var name = "css/" + value + "ColorThemes.css"
    
    newStyle.setAttribute("href", name);
    radiobtn.checked = true;
}

function dropConfetti() {
        
    var x = document.getElementById("chkConfetti");
        
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        
    } else { 
        //var x = document.getElementById("chkConfetti");
        x.className = x.className.replace(" w3-show", "");
    }
}

function activateConfetti(elt){
    var radio = document.getElementById("tglConfetti");
  
    if (radio.checked){
      if (elt.checked == true){
      makeConfetti(elt);
      } 
    } 
}

function closeConfetti() {

    var y = document.getElementById("chkConfetti")
    var x = document.getElementById("lstSettings");
    
    y.className = y.className.replace(" w3-show", "");
    x.className = x.className.replace("w3-show", "");  
}

function toggleOnOff (elt) {
  var lblOn = document.getElementById("lblOn");
  var lblOff = document.getElementById("lblOff");
  
  if (elt.checked){
     var toggleSet = "on"
     lblOn.className = "w3-toggle-bold";
     lblOff.className = "w3-toggle-norm";
  
    } else {
    var toggleSet = "off"
    lblOff.className = "w3-toggle-bold";
    lblOn.className = "w3-toggle-norm";
  }
  
  localStorage.setItem("toggleSet", toggleSet);
}

function setToggle(){

    var toggleSet = localStorage.getItem("toggleSet");
    
    var tog = document.getElementById("tglConfetti");
    if (toggleSet == "on"){
        tog.checked = true;
        lblOn.className = "w3-toggle-bold";
        lblOff.className = "w3-toggle-norm"
    } else {
        tog.checked = false;
        lblOff.className = "w3-toggle-bold";
        lblOn.className = "w3-toggle-norm"
    }
}

    