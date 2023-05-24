
let botoes = document.querySelectorAll('.drum');
for (let index = 0; index < botoes.length; index++) {
    botoes[index].addEventListener('click', function(){
        let key = this.innerHTML
        makeSound(key);
        buttonAnimation(key);   
     })   
}

document.addEventListener('keydown', function(event){
    let key = event.key
    makeSound(key);
    buttonAnimation(key)
})

function makeSound(key) {
    switch (key) {
        case 'w':
            let audiow = new Audio('./sounds/tom-1.mp3');
            audiow.play();
            break;
        case 'a':
            let audioa = new Audio('./sounds/tom-2.mp3');
            audioa.play();
            break;
        case 's':
            let audios = new Audio('./sounds/tom-3.mp3');
            audios.play();
            break;
        case 'd':
            let audiod = new Audio('./sounds/tom-4.mp3');
            audiod.play();
            break;
        case 'j':
            let audioj = new Audio('./sounds/snare.mp3');
            audioj.play();
            break;
        case 'k':
            let audiok = new Audio('./sounds/crash.mp3');
            audiok.play();
            break;  
        case 'l':
            let audiol = new Audio('./sounds/kick-bass.mp3');
            audiol.play();
            break;      
        default:
            break;
    };
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed')
    setTimeout(() => {
        activeButton.classList.remove('pressed') 
    }, 100);
}