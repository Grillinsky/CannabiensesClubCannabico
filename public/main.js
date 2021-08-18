
var span = document.querySelectorAll(".titleResponsive");
var title = document.getElementById("title");
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var icon = document.getElementById("responsive");
var links = document.getElementById("navLinksUl");
var responsive = document.getElementById("responsive");
var linksLi = document.querySelectorAll(".navLinksLi");
var card = document.getElementById("razasCard");
var nombre = document.getElementById("name");
var image = document.getElementById("image");
var indica = document.getElementById("indica");
var sativa = document.getElementById("sativa");
var description = document.getElementById("description");
var thc = document.getElementById("thc");
var principal = document.getElementById("principal");
var secondary = document.getElementById("secondary");


// { 
    
//     fetch("razas.json")
//     .then(function(res) {res.json()} )
//     .then(function(razas){
//         console.log(razas)
//     })
// DISPLAY INFORMATION FROM LIST 

    let raza  =  [ {
        "id": 1,
        "nombre": "Lemon Haze",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding es una combinacion de razas Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tarde lo que sea",
        "imagen": "/CSS/imagenes/MembresiaHeavy.jpg"
    },
    {
        "id": 2,
        "nombre": "Malibu",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding es una Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tarde combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/Malibu.png"
    },
    {
        "id": 3,
        "nombre": "Sunday x Wedding",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding es una combinacion de razas l Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tardeo que sea",
        "imagen": "/CSS/imagenes/Exotic.jpg"
    },
    {
        "id": 4,
        "nombre": "Blueberry",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x v Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tardeWedding es una combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/Plutos Fire.jpg"
    },
    {
        "id": 5,
        "nombre": "Y",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding es Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tarde una combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/MembresiaMedium.jpg"
    },
    {
        "id": 6,
        "nombre": "Ak47",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding es una Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tarde combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/Ak-47.jpg"
    },
    {
        "id": 7,
        "nombre": "Platinum",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding es una Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tarde Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tarde combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/Prueba.png"
    },
    {
        "id": 8,
        "nombre": "RC x OG",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding e Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tardes una combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/ocean.jpg"
    },
    {
        "id": 9,
        "nombre": "24 Kilates",
        "indica": "80%",
        "sativa": "20%",
        "descripcion" : "Sunday x Wedding es Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tarde una combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/chalkboard.jpg"
    }]


    let lemonHaze = raza[0]
    let malibu = raza[1]
    let sw = raza[2]
    let blueberry = raza[3]
    let y = raza[4]
    let ak47 = raza[5]
    let platinum = raza[6]
    let rcxog = raza[7]
    let kilates24 = raza[8]

    document.getElementById("lemonHaze").addEventListener("click", function getLh() {
        nombre.innerHTML =  lemonHaze.nombre;
        indica.innerHTML = lemonHaze.indica  + "indica";
        sativa.innerHTML = lemonHaze.sativa + "sativa";
        description.innerHTML = lemonHaze.descripcion;
        image.src = lemonHaze.imagen;
        }  );

    document.getElementById("malibu").addEventListener("click", function getMali() {
        nombre.innerHTML =  malibu.nombre;
        indica.innerHTML = malibu.indica  + "indica";
        sativa.innerHTML = malibu.sativa + "sativa";
        description.innerHTML = malibu.descripcion;
        image.src = malibu.imagen;
        }  );
        
    document.getElementById("sxw").addEventListener("click", function getSw() {
        nombre.innerHTML =  sw.nombre;
        indica.innerHTML = sw.indica  + "indica";
        sativa.innerHTML = sw.sativa + "sativa";
        description.innerHTML = sw.descripcion;
        image.src = sw.imagen;
        }  );
        
    document.getElementById("blueberry").addEventListener("click", function getBb() {
        nombre.innerHTML =  blueberry.nombre;
        indica.innerHTML = blueberry.indica  + "indica";
        sativa.innerHTML = blueberry.sativa + "sativa";
        description.innerHTML = blueberry.descripcion;
        image.src = blueberry.imagen;
        }  );
        
    document.getElementById("y").addEventListener("click", function getY() {
        nombre.innerHTML =  y.nombre;
        indica.innerHTML = y.indica  + "indica";
        sativa.innerHTML = y.sativa + "sativa";
        description.innerHTML = y.descripcion;
        image.src = y.imagen;
        }  );
        
    document.getElementById("ak47").addEventListener("click", function getAk() {
        nombre.innerHTML =  ak47.nombre;
        indica.innerHTML = ak47.indica  + "indica";
        sativa.innerHTML = ak47.sativa + "sativa";
        description.innerHTML = ak47.descripcion;
        image.src = ak47.imagen;
        }  );
        
    document.getElementById("platinum").addEventListener("click", function getPlat() {
        nombre.innerHTML =  platinum.nombre;
        indica.innerHTML = platinum.indica  + "indica";
        sativa.innerHTML = platinum.sativa + "sativa";
        description.innerHTML = platinum.descripcion;
        image.src = platinum.imagen;
        }  );
        
    document.getElementById("rcxog").addEventListener("click", function getRc() {
        nombre.innerHTML =  rcxog.nombre;
        indica.innerHTML = rcxog.indica  + "indica";
        sativa.innerHTML = rcxog.sativa + "sativa";
        description.innerHTML = rcxog.descripcion;
        image.src = rcxog.imagen;
        }  );
        
    document.getElementById("24kilates").addEventListener("click", function get24k() {
        nombre.innerHTML =  kilates24.nombre;
        indica.innerHTML = kilates24.indica  + "indica";
        sativa.innerHTML = kilates24.sativa + "sativa";
        description.innerHTML = kilates24.descripcion;
        image.src = kilates24.imagen;
        card.style.transform = "translateY(-350px)";
        }  );
        




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
        // CHANGE FROM COLLAPSED BAR TO EXPANDED BAR



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

