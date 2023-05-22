
let botoes = document.querySelectorAll('.drum');
for (let index = 0; index < botoes.length; index++) {
    botoes[index].addEventListener('click', handleClick)
    switch (botoes[index].className) {
        case 'w drum':
            var audio = new Audio('sounds/crash.mp3');
            audio.play
            break;
    
        default:
            break;
    }   
}



function handleClick() {
    alert("clicou")
}