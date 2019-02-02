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