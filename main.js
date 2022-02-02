const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const countries = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// creo l'elemento display rhichiamandolo da html
const displayElement = document.querySelector('.display');

// aggiungo le immagini e le didascalie a display
for ( i = 0; i < images.length; i++) {
    displayElement.innerHTML += `<div class="display-img">
                                    <img src="${images[i]}">
                                </div>`;
    displayElement.innerHTML += `<div class="caption">
                                    <h1>${countries[i]}</h1>
                                    <h3>${text[i]}</h3>
                                </div>`;                         
}


// creo l'elemento slider rhichiamandolo da html
const sliderElement = document.querySelector('.slider');

// aggiungo le immagini e i layover a slider
for ( i = 0; i < images.length; i++) {
    sliderElement.innerHTML += `<div class="thumb">
                                    <div class="layover"></div>
                                    <img src="${images[i]}">
                                </div>`;
}

// aggiungo le frecce a slider
sliderElement.innerHTML +=  `<div class="prev">
                                <i class="fas fa-chevron-up"></i>
                            </div>`;
sliderElement.innerHTML +=  `<div class="next">
                                <i class="fas fa-chevron-down"></i>
                            </div>`;

// creo gli elementi freccia (mi servono per potergli attivare l'eventListener sul click)
const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');

// creo variabile che tiene traccia della thumb corrente
// (scelgo arbitrariamente che di default la pagina si carichi alla terza thumb)
let currentThumb = 2;

// creo una lista di tutti i div display-img...
const displayImages = document.getElementsByClassName('display-img');
// ...in modo da aggiungere al display-img corrente la classe active...
displayImages[currentThumb].classList.add('active');
// ...e poter usare la lista dentro agli eventListener per cambiare al click il div avente active

// faccio lo stesso con le caption
const captions = document.getElementsByClassName('caption');
captions[currentThumb].classList.add('active');

// faccio lo stesso con le thumb
const thumbs = document.getElementsByClassName('thumb');
thumbs[currentThumb].classList.add('active');

// aggiungo eventListener al click di prev
prevElement.addEventListener('click', function() {
    if (currentThumb > 0) {
        thumbs[currentThumb].classList.remove('active');
        displayImages[currentThumb].classList.remove('active');
        captions[currentThumb].classList.remove('active');
        currentThumb--; //vado alla thumb precedente
        thumbs[currentThumb].classList.add('active');
        displayImages[currentThumb].classList.add('active');
        captions[currentThumb].classList.add('active');
    } else { //gestisco il caso in cui currentThumb = 0; il clik su prev deve portare all'ultima thumb
        thumbs[currentThumb].classList.remove('active');
        displayImages[currentThumb].classList.remove('active');
        captions[currentThumb].classList.remove('active');
        currentThumb = thumbs.length - 1;
        thumbs[currentThumb].classList.add('active');
        displayImages[currentThumb].classList.add('active');
        captions[currentThumb].classList.add('active');
    }
});

// aggiungo eventListener al click di next
nextElement.addEventListener('click', function() {
    if (currentThumb < thumbs.length - 1) {
        thumbs[currentThumb].classList.remove('active');
        displayImages[currentThumb].classList.remove('active');
        captions[currentThumb].classList.remove('active');
        currentThumb++; //vado alla thumb successiva
        thumbs[currentThumb].classList.add('active');
        displayImages[currentThumb].classList.add('active');
        captions[currentThumb].classList.add('active');
    } else { //gestisco il caso in cui currentThumb = thumb.length-1; il clik su next deve portare alla prima thumb
        thumbs[currentThumb].classList.remove('active');
        displayImages[currentThumb].classList.remove('active');
        captions[currentThumb].classList.remove('active');
        currentThumb = 0;
        thumbs[currentThumb].classList.add('active');
        displayImages[currentThumb].classList.add('active');
        captions[currentThumb].classList.add('active');
    }
});