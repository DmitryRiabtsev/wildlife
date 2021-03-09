const items = [{
    name: 'Deer',
    url: 'assets/jpg/slider-image1.jpg',
    subtitle: 'Naturalist investigation'
},
{
    name: 'Squirrel',
    url: 'assets/jpg/slider-image2.jpg',
    subtitle: 'Kamikaze squirrels'
},
{
    name: 'Bird',
    url: 'assets/jpg/slider-image3.jpg',
    subtitle: 'Birds Fight club'
}];

document.addEventListener("DOMContentLoaded", ()=>{
	renderCard();	
});

let arrayIndex = [];
let renderCard = function(){
    items.map((item,index)=>{
        arrayIndex.push(index)
        document.querySelector('.slider-content').innerHTML += cardRender(item['name'], item['subtitle'], item['url']);
    });
};

let arrayRandomIndex = function(){
    let arrayItems = [];
    while(arrayItems.length < 3){
        let indexRandom = Math.floor(Math.random()*3);
        if(arrayIndex.includes(indexRandom) && !arrayItems.includes(indexRandom)){
            arrayItems.push(indexRandom)
        }
    }
    arrayIndex = arrayItems;
}

let direction = function(){
    arrayRandomIndex();
    document.querySelector('.slider-content').innerHTML = '';
    for(let i = 0; i < arrayIndex.length; i++){
        items.map((item, index)=>{
            if(arrayIndex[i] == index)
            document.querySelector('.slider-content').innerHTML += cardRender(item['name'], item['subtitle'], item['url']);
        });
    }    
};

let cardRender = function(name, subtitle, url){
    return `<div class="slider-card" style="background-image: url(${url});">
                <p class="slider-title">${name}</p>
                <p class="slider-subtitle">${subtitle}</p>
            </div>`
};
