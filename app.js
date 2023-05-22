
let botoes = document.querySelectorAll('.drum');
for (let index = 0; index < botoes.length; index++) {
    botoes[index].addEventListener('click', handleClick)   
}



function handleClick() {
    alert("clicou")
}