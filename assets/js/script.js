var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
            if(window.pageYOffset>100){

                nav.style.background = "#141414";
                nav.style.transition = "background .5s ease-in-out";

            }
            else{
                nav.style.background = "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))";
            }
        });