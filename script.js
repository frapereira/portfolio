

AOS.init();

// Menu botão
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");

  document.getElementById("nav").classList.toggle("change");

  document.getElementById("menu-bg").classList.toggle("change-bg");

}


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
