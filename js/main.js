// array con objects
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// creiamo un ciclo che ci permette di inserire i nostri oggetti in pagina

for (let i = 0; i < images.length; i++) {
    const cardMiniatures = images[i];
    

    const miniatureBox = document.getElementById("miniatureBox");
    const imgTag = `<img class = "miniatures" src ="./${cardMiniatures.image}" />`;
    
    
    miniatureBox.innerHTML += (imgTag);

    
}

const cardBox = document.getElementById("imageBox");

for (i = 0; i < images.length; i++){
    const cards = images[i];
    const imgTag = document.createElement("img");
    imgTag.src = cards.image;

    const divTag = document.createElement("div");
    const titleElement = `<h2>${cards.title}</h2>`;
    const pElement = `<p>${cards.text}</p>`;

    divTag.innerHTML += titleElement + pElement;



    if(i === 0){
        imgTag.classList.add("visible");
        divTag.classList.add("visible", "position");
    }
    
    cardBox.append(imgTag);
    cardBox.append(divTag);

 
   
}

const selectImg = document.getElementsByTagName("img")

const divElem = cardBox.getElementsByTagName("div");

let currentImgIndex = 0;

/******* EVENTI **********/


// creiamo un eventlistener che al click del bottone next cambia immagine
const btnNext = document.querySelector(".btnNext");

btnNext.addEventListener("click",function(){
    if(currentImgIndex < 5){
        for (let i = 0; i < selectImg.length; i++) {
            const slide = selectImg[i];
            console.log(slide);
            const imgDescr = divElem[i];
            console.log(imgDescr);
    
            if(i== currentImgIndex){
                slide.classList.add("visible");
                imgDescr.classList.add("visible","position");
            }else{
                slide.classList.remove("visible");
                imgDescr.classList.remove("visible","position");
            }
    
            
        }

        currentImgIndex++;
    }else{
        currentImgIndex = 0;
    }
    
})




const btnPrev = document.querySelector(".btnPrev");

btnPrev.addEventListener("click",function(){
    if(currentImgIndex > 0){
        for (let i = 0; i < selectImg.length; i++) {
            const slide = selectImg[i];
            const imgDescr = divElem[i];
    
            if(i== currentImgIndex -1){
                slide.classList.add("visible");
                imgDescr.classList.add("visible","position");
            }else{
                slide.classList.remove("visible");
                imgDescr.classList.remove("visible","position");
            }
    
            
        }

        currentImgIndex--;
    }else{
        currentImgIndex = 5;
    }
    
})