document.addEventListener("DOMContentLoaded",function(){
    var links = document.querySelectorAll(".nav li a");
    if(links.length !=0 ){
        for(var i=0; i< links.length; i++){
            links[i].addEventListener("click",function(){
                var activeLink = document.querySelector(".nav li a.active");
                if(activeLink){
                    activeLink.classList.remove("active");
                }
                this.classList.add("active")
            })
        }
    }
})
/* Collapsible Side Menus */
var coll = document.getElementsByClassName("collapsible");
var i;
for(i = 0;i < coll.length;i++){
    coll[i].addEventListener("click",collapseAnimate);
}


function collapseAnimate(){
    
    //console.log(this == coll[0]);
    this.classList.toggle("open");
    var submenu = this.nextElementSibling;
    if(submenu.style.maxHeight){ /*if open */
        /* closing */
        submenu.style.maxHeight = null;

        for(i = coll.length - 1 ;i >= 0; i--){
            if(coll[i] == this){
                break;
            }
            else{
                if(coll[i].nextElementSibling.style.maxHeight){
                    coll[i].nextElementSibling.style.maxHeight = null;
                    coll[i].classList.toggle("open");
                } 
            }
        }
    }
    else{
        submenu.style.maxHeight = "300px";
    }
}

/* old without animation 
function collapse(){
    var submenu = this.nextElementSibling;
    if(submenu.style.display == "block"){
        submenu.style.display = "none";
    }
    else{
        submenu.style.display = "block";
    }
}
*/

/*  Sidebar Minimize */
 var sidebar = document.getElementsByClassName("sidebar");
 sidebar[0].style.maxWidth = "300px";

function minimize(){
    var sidebar = document.getElementsByClassName("sidebar");
    var width = sidebar[0].style.maxWidth;
    var content = document.getElementsByClassName("content");

    if(width == "300px"){
        sidebar[0].style.maxWidth = "0px";
        content[0].style.width="99%";
    }
    else{
        sidebar[0].style.maxWidth = "300px";
        content[0].style.width="80%";
    }
   
 
}