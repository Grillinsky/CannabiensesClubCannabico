
var span = document.querySelectorAll(".titleResponsive");
var title = document.getElementById("title");
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var icon = document.getElementById("responsive");
var links = document.getElementById("navLinksUl");
var responsive = document.getElementById("responsive");
var linksLi = document.querySelectorAll(".navLinksLi");
//     //RESPONSIVE NAV BAR
// responsive.addEventListener("click",
// function showLinks(){
// icon.style.display = "none";
// links.style.display = "inherit";
// for(var i = 0; i < span.length; i ++){
//             span[i].style.fontSize = "8vw";
//     };
// });
    //TITLE SHRINK ON SCROLL
    if (width > 800){
        window.onscroll = function() {scrollFunctionLarge()};
        function scrollFunctionLarge(){
            // Check for scroll
                if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
                    //shrink Title
                    title.style.fontSize = "3vw"
                for(var i = 0; i < span.length; i ++)
                {span[i].style.fontSize = "2vw";};
                //Shrink links
                for(var i = 0; i < linksLi.length; i++)
                {linksLi[i].style.fontSize = "1vw"};
                }else{
                    title.style.fontSize = "7vw"
                for(var i = 0; i < span.length; i ++)
                //Return to size on TOP
                {span[i].style.fontSize = "6vw";};
                for(var i = 0; i < linksLi.length; i++)
                {linksLi[i].style.fontSize = "3vw";};
                };
                };
    }else{
        //  RESPONSIVE NAV BAR
    responsive.addEventListener("click",
    function showLinks(){
    icon.style.display = "none";
    links.style.display = "inherit";
    for(var i = 0; i < span.length; i ++){
                span[i].style.fontSize = "8vw";
        };
    });
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
            if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
            title.style.padding = ".2em";
            for(var i = 0; i < span.length; i ++){
                span[i].style.fontSize = "0vw";
                links.style.display = "none";
                icon.style.display = "initial";
            };
            }else{
            for(var i = 0; i < span.length; i ++)
            {span[i].style.fontSize = "8vw";};
            };
            };
    }

// linksLi.addEventListener("click", 
// function hideLinks(){
//     icon.style.display = "initial";
//     links.style.display = "none";
//     for(var i = 0; i < span.length; i ++){
//                 span[i].style.fontSize = "0px";
//         };
// });


// if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//         document.getElementById("title").style.fontSize = "5vw";
//     }else{
//         document.getElementById("title").style.fontSize = "10vw"
//     }