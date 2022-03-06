const theGrid = document.getElementById('grid');
for (let i = 1 ; i <=100 ; i++){
    currentBox = createSingleBox();
    currentBox.addEventListener('click', function() {
    this.classList.toggle('clicked');
    });
    currentBox.innerHTML = i;
    theGrid.appendChild(currentBox);
    }
const theGridInter = document.getElementById('grid-intermediate');
    for (let i = 1 ; i <=81 ; i++){
        currentBoxInter = createSingleBoxInter();
        currentBoxInter.addEventListener('click', function() {
        this.classList.toggle('clicked');
        });
        currentBoxInter.innerHTML = i;
        theGridInter.appendChild(currentBoxInter);
        }
const theGridHigh = document.getElementById('grid-high');
        for (let i = 1 ; i <=49 ; i++){
            currentBoxHigh = createSingleBoxHigh();
            currentBoxHigh.addEventListener('click', function() {
            this.classList.toggle('clicked');
            });
            currentBoxHigh.innerHTML = i;
            theGridHigh.appendChild(currentBoxHigh);
            }
let playButton = document.querySelector('#play-btn');
playButton.addEventListener('click', function(){
    let userSelection = document.getElementById('game-level').value;

    switch (userSelection) {
        case 'easy':
        document.querySelector('#grid').classList.remove('d-none');
        document.querySelector('#grid-intermediate').classList.add('d-none');
        document.querySelector('#grid-high').classList.add('d-none');
        
    break;
        case 'intermediate':
            document.querySelector('#grid-intermediate').classList.remove('d-none');
            document.querySelector('#grid').classList.add('d-none');
            document.querySelector('#grid-high').classList.add('d-none');
    break; 
        case 'high':
            document.querySelector('#grid-high').classList.remove('d-none');
            document.querySelector('#grid').classList.add('d-none');
            document.querySelector('#grid-intermediate').classList.add('d-none');
    break;
}
});

function createSingleBox(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('single-box');
    return currentElement;
}

function createSingleBoxInter(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('single-box-intermediate');
    return currentElement;
}

function createSingleBoxHigh(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('single-box-high');
    return currentElement;
}
