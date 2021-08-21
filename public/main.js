
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
var description = document.getElementById("descriptionText");
var thc = document.getElementById("thc");
var thcIcon = document.getElementById("thcIcon");
var thcText = document.getElementById("thcText");
var principal = document.getElementById("principal");
var principalIcon = document.getElementById("principalIcon");
var principalText = document.getElementById("principalText");
var secondary = document.getElementById("secondary");
var secondaryIcon = document.getElementById("secondaryIcon");
var secondaryText = document.getElementById("secondaryText");




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
        "indica": "40%",
        "sativa": "60%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "La Lemon Haze es una bestia de predominancia sativa que tiene una increíble potencia psicoactiva. El pegue producido por la Lemon Haze es cerebral, energizante, induce la contemplación y ofrece momentos de euforia y psicodelia",
        "imagen": "/CSS/imagenes/MembresiaHeavy.jpg",
        "thc-icon": "fas fa-thermometer-three-quarters fa-2x",
        "tch-text": "21%",
        "principal-icon": "fas fa-couch fa-2x",
        "principal-text":"Relajante",
        "secondary-icon": "fas fa-laugh-beam fa-2x",
        "secondary-text": "Euforia"
    },
    {
        "id": 2,
        "nombre": "Malibu",
        "indica": "20%",
        "sativa": "80%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "La Malibú se creó con un objetivo: proporcionar a los amantes de sativa una variedad que tenga todas las características de esta subespecie de cannabis. Una fumada de Malibú entrega un sabor terroso y amaderado, y generará rápidamente efectos cerebrales y energéticos, lo que tiene como resultado un potente pegue cerebral.",
        "imagen": "/CSS/imagenes/Malibu.png",
        "thc-icon": "fas fa-thermometer-full fa-2x",
        "tch-text": "24%",
        "principal-icon": "fas fa-palette fa-2x",
        "principal-text":"Creativo",
        "secondary-icon": "fas fa-comments",
        "secondary-text": "Hablador"
    },
    {
        "id": 3,
        "nombre": "Sundae x Wedding",
        "indica": "40%",
        "sativa": "60%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "Sunday x Wedding es una combinacion de las razas Sundae Driver y Wedding Cake, los efectos de calmantes y balanceados de la primera y los sabores mandarina y terrozos de la segunda hacen de ésta una combinación imperdible ",
        "imagen": "/CSS/imagenes/Exotic.jpg",
        "thc-icon": "fas fa-thermometer-three-quarters fa-2x",
        "tch-text": "21%",
        "principal-icon": "fas fa-couch fa-2x",
        "principal-text":"Relajante",
        "secondary-icon": "fas fa-balance-scale fa-2x",
        "secondary-text": "Balanceado"
    },
    {
        "id": 4,
        "nombre": "Blueberry",
        "indica": "80%",
        "sativa": "20%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "El sabor que distingue a la Blueberry es mayormente dulce, afrutado con matices florales recuerda a los arándanos y a frutos del bosque. Ofrece un efecto corporal duradero, que es muy relajante pero también aporta ligeras sensaciones de euforia, aliviando el estrés y proporcionando un efecto animado.",
        "imagen": "/CSS/imagenes/Plutos Fire.jpg",
        "thc-icon": "fas fa-thermometer-half fa-2x",
        "tch-text": "19%",
        "principal-icon": "fas fa-couch fa-2x",
        "principal-text":"Relajante",
        "secondary-icon": "fas fa-laugh-beam fa-2x",
        "secondary-text": "Euforia"
    },
    {
        "id": 5,
        "nombre": "Y",
        "indica": "80%",
        "sativa": "20%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "La Y griega es una raza extremadamente potente. Su efecto empieza con una fuerte sacudida energética que lentamente desencadena en un estado de lucidez y relajación. Mantiene un olor clásico a Haze, que se combina con un ligero toque dulzón que la hace destacar.",
        "imagen": "/CSS/imagenes/MembresiaMedium.jpg",
        "thc-icon": "fas fa-thermometer-full fa-2x",
        "tch-text": "25%",
        "principal-icon": "fas fa-battery-full fa-2x",
        "principal-text":"Energetico",
        "secondary-icon": "fas fa-lightbulb fa-2x",
        "secondary-text": "Lucidez"
    },
    {
        "id": 6,
        "nombre": "Ak47",
        "indica": "80%",
        "sativa": "20%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "La AK-47 es una de las mejores variedades del mundo y la preferida de muchos. , Con un intenso aroma picante estilo skunk. Puedes apreciar algunos matices cítricos en su fumada. Con un efecto cerebral constante, excelente para actividades creativas",
        "imagen": "/CSS/imagenes/Ak-47.jpg",
        "thc-icon": "fas fa-thermometer-full fa-2x",
        "tch-text": "24% +",
        "principal-icon": "fas fa-users fa-2x",
        "principal-text":"Sociable",
        "secondary-icon": "fas fa-brain fa-2x",
        "secondary-text": "Cerebral"
    },
    {
        "id": 7,
        "nombre": "Platinum OG",
        "indica": "80%",
        "sativa": "20%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "Tan preciosa como el metal es el nombre. Con un contenido de THC regularmente de 20%. Con breve, embriagador efecto que se convierte en uno poderoso físico de sedación adecuado para el uso durante la noche y para combatir el dolor, el estrés o la ansiedad, haciendo de este precioso cepa de un sólido sanador.",
        "imagen": "/CSS/imagenes/Prueba.png",
        "thc-icon": "fas fa-thermometer-three-quarters fa-2x",
        "tch-text": "22%",
        "principal-icon": "fas fa-laugh-beam fa-2x",
        "principal-text":"Euforia",
        "secondary-icon": "fas fa-couch fa-2x",
        "secondary-text": "Relajante"
    },
    {
        "id": 8,
        "nombre": "Red Congolese x OG",
        "indica": "80%",
        "sativa": "20%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "Sunday x Wedding e Su sabor es mayormente dulce, con tonos amargos, citricos y mentolados. Recomendamos esta cepa para fumar a la tardes una combinacion de razas lo que sea",
        "imagen": "/CSS/imagenes/ocean.jpg",
        "thc-icon": "fas fa-thermometer-three-quarters fa-2x",
        "tch-text": "23%",
        "principal-icon": "fas fa-battery-full fa-2x",
        "principal-text":"Energetico",
        "secondary-icon": "fas fa-bullseye fa-2x",
        "secondary-text": "Enfocado"
    },
    {
        "id": 9,
        "nombre": "24 K",
        "indica": "60%",
        "sativa": "40%",
        "indica-class": "",
        "sativa-class": "",
        "descripcion" : "La 24k es muy aromática, con un fuerte olor a Kush combinado con notas cítricas frescas, una variedad muy sabrosa que proporciona un delicado humo y una deliciosa experiencia de vaporización. El efecto de esta variedad es muy fuerte, una mezcla de profunda relajación física y una energética euforia",
        "imagen": "/CSS/imagenes/chalkboard.jpg",
        "thc-icon": "fas fa-thermometer-full fa-2x",
        "tch-text": "24%",
        "principal-icon": "fas fa-dumbbell fa-2x",
        "principal-text":"Fuerte",
        "secondary-icon": "fas fa-laugh-beam fa-2x",
        "secondary-text": "Euforia"
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
        thcIcon.classList = lemonHaze["thc-icon"];
        thcText.innerHTML = lemonHaze["tch-text"] + " THC";
        principalIcon.classList = lemonHaze["principal-icon"];
        principalText.innerHTML = lemonHaze["principal-text"];
        secondaryIcon.classList = lemonHaze["secondary-icon"];
        secondaryText.innerHTML = lemonHaze["secondary-text"];
        }  );

    document.getElementById("malibu").addEventListener("click", function getMali() {
        nombre.innerHTML =  malibu.nombre;
        indica.innerHTML = malibu.indica  + " indica";
        sativa.innerHTML = malibu.sativa + " sativa";
        description.innerHTML = malibu.descripcion;
        image.src = malibu.imagen;
        thcIcon.classList = malibu["thc-icon"];
        thcText.innerHTML = malibu["tch-text"] + " THC";
        principalIcon.classList = malibu["principal-icon"];
        principalText.innerHTML = malibu["principal-text"];
        secondaryIcon.classList = malibu["secondary-icon"];
        secondaryText.innerHTML = malibu["secondary-text"];
        }  );
        
    document.getElementById("sxw").addEventListener("click", function getSw() {
        nombre.innerHTML =  sw.nombre;
        indica.innerHTML = sw.indica  + " indica";
        sativa.innerHTML = sw.sativa + " sativa";
        description.innerHTML = sw.descripcion;
        image.src = sw.imagen;
        thcIcon.classList = sw["thc-icon"];
        thcText.innerHTML = sw["tch-text"] + " THC";
        principalIcon.classList = sw["principal-icon"];
        principalText.innerHTML = sw["principal-text"];
        secondaryIcon.classList = sw["secondary-icon"];
        secondaryText.innerHTML = sw["secondary-text"];
        }  );
        
    document.getElementById("blueberry").addEventListener("click", function getBb() {
        nombre.innerHTML =  blueberry.nombre;
        indica.innerHTML = blueberry.indica  + " indica";
        sativa.innerHTML = blueberry.sativa + " sativa";
        description.innerHTML = blueberry.descripcion;
        image.src = blueberry.imagen;
        thcIcon.classList = blueberry["thc-icon"];
        thcText.innerHTML = blueberry["tch-text"] + " THC";
        principalIcon.classList = blueberry["principal-icon"];
        principalText.innerHTML = blueberry["principal-text"];
        secondaryIcon.classList = blueberry["secondary-icon"];
        secondaryText.innerHTML = blueberry["secondary-text"];
        }  );
        
    document.getElementById("y").addEventListener("click", function getY() {
        nombre.innerHTML =  y.nombre;
        indica.innerHTML = y.indica  + " indica";
        sativa.innerHTML = y.sativa + " sativa";
        description.innerHTML = y.descripcion;
        image.src = y.imagen;
        thcIcon.classList = y["thc-icon"];
        thcText.innerHTML = y["tch-text"] + " THC";
        principalIcon.classList = y["principal-icon"];
        principalText.innerHTML = y["principal-text"];
        secondaryIcon.classList = y["secondary-icon"];
        secondaryText.innerHTML = y["secondary-text"];
        }  );
        
    document.getElementById("ak47").addEventListener("click", function getAk() {
        nombre.innerHTML =  ak47.nombre;
        indica.innerHTML = ak47.indica  + " indica";
        sativa.innerHTML = ak47.sativa + " sativa";
        description.innerHTML = ak47.descripcion;
        image.src = ak47.imagen;
        thcIcon.classList = ak47["thc-icon"];
        thcText.innerHTML = ak47["tch-text"] + " THC";
        principalIcon.classList = ak47["principal-icon"];
        principalText.innerHTML = ak47["principal-text"];
        secondaryIcon.classList = ak47["secondary-icon"];
        secondaryText.innerHTML = ak47["secondary-text"];
        }  );
        
    document.getElementById("platinum").addEventListener("click", function getPlat() {
        nombre.innerHTML =  platinum.nombre;
        indica.innerHTML = platinum.indica  + " indica";
        sativa.innerHTML = platinum.sativa + " sativa";
        description.innerHTML = platinum.descripcion;
        image.src = platinum.imagen;
        thcIcon.classList = platinum["thc-icon"];
        thcText.innerHTML = platinum["tch-text"] + " THC";
        principalIcon.classList = platinum["principal-icon"];
        principalText.innerHTML = platinum["principal-text"];
        secondaryIcon.classList = platinum["secondary-icon"];
        secondaryText.innerHTML = platinum["secondary-text"];
        }  );
        
    document.getElementById("rcxog").addEventListener("click", function getRc() {
        nombre.innerHTML =  rcxog.nombre;
        indica.innerHTML = rcxog.indica  + " indica";
        sativa.innerHTML = rcxog.sativa + " sativa";
        description.innerHTML = rcxog.descripcion;
        image.src = rcxog.imagen;
        thcIcon.classList = rcxog["thc-icon"];
        thcText.innerHTML = rcxog["tch-text"] + " THC";
        principalIcon.classList = rcxog["principal-icon"];
        principalText.innerHTML = rcxog["principal-text"];
        secondaryIcon.classList = rcxog["secondary-icon"];
        secondaryText.innerHTML = rcxog["secondary-text"];
        }  );
        
    document.getElementById("24kilates").addEventListener("click", function get24k() {
        nombre.innerHTML =  kilates24.nombre;
        indica.innerHTML = kilates24.indica  + " indica";
        sativa.innerHTML = kilates24.sativa + " sativa";
        description.innerHTML = kilates24.descripcion;
        image.src = kilates24.imagen;
        thcIcon.classList = kilates24["thc-icon"];
        thcText.innerHTML = kilates24["tch-text"] + " THC";
        principalIcon.classList = kilates24["principal-icon"];
        principalText.innerHTML = kilates24["principal-text"];
        secondaryIcon.classList = kilates24["secondary-icon"];
        secondaryText.innerHTML = kilates24["secondary-text"];
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

