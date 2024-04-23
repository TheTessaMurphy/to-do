function dropSettings() {
    //opens and closes the settings dialog
        var x = document.getElementById("lstSettings");
        
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else { 
            var x = document.getElementById("lstSettings");
            var y = document.getElementById("lstColor");
            y.className = y.className.replace(" w3-show", "");
            x.className = x.className.replace(" w3-show", "");
           
        }
    }

    
   /* function dropColor() {
    //Opens and closes the color list dialog
    
        var x = document.getElementById("ddColor");
        
        if (x.className.indexOf("w3-show") == -1) {
            x.className += "w3-show";
        } else { 
            var x = document.getElementById("ddColor");
            x.className = x.className.replace("w3-show", "");
        }
    }  */
    
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
        var value = toRem.getAttribute("href"); 
        var name = "css/" + elem + "ColorThemes.css"
        toRem.setAttribute("href", name);
       
        //toRem.parentNode.removeChild(toRem)
        //document.getElementById('styles').setAttribute("href", name");

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
            var x = document.getElementById("chkConfetti");
            x.className = x.className.replace(" w3-show", "");
            
        }
    }

    function setToggle(){
  
        var toggleSet = localStorage.getItem("toggleSet");
        
        var tog = document.getElementById("tglConfetti");
        if (toggleSet == "on"){
          tog.checked = true;
        } else {
            tog.checked = false;
        }
      }

    