

// Menu botão
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");


}

//Maquina de escrever

// function typerWrite(elemento){
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = ' ';
//     textoArray.forEach(function(letra, i) {
//         setTimeout(function() {
//             elemento.innerHTML += letra;
//         }, 175 * i)
        
//     });
// }

// const titulo = document.querySelector('.escrever');
// typerWrite(titulo);

function write(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, index) =>{
      setTimeout(() => elemento.innerHTML += letra, 75 * index);
    });
  }
  
  const titulo = document.querySelector('.escrever');
  write(titulo);
  write(document.querySelector('.escrever-h1'));
