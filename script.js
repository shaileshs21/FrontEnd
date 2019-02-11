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

    coll[coll.length-1].nextElementSibling.style.maxHeight = null;
    console.log(this);
    this.classList.toggle("open"); 
    var submenu = this.nextElementSibling;
    if(submenu.style.maxHeight){
        submenu.style.maxHeight = null;
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

function minimize(){
    console.log("in Minimize sidebar");
    var sidebar = document.getElementsByClassName("sidebar");
    //sidebar.style.maxWidth = "0px";

    console.log(sidebar);
   // sidebar.classList.toggle("sidebarWidth");
 
}