const botonComprar = document.getElementById('buyBtn');
const inputColor = document.getElementById('color');
const inputSize = document.getElementById('size');
let cart = document.getElementById("cart");
const locales = document.getElementById("locales");
const pickup= document.getElementById("pickup");
const localFlores = document.getElementById ("localFlores");
const localPalermo =document.getElementById ("localPalermo");
const localChaco = document.getElementById ("localChaco");

botonComprar.addEventListener('click', mostrarCard);

function mostrarCard(event) {
  event.preventDefault();
  const inputColorValue = inputColor.value;
  const inputSizeValue = inputSize.value;

  crearCard(inputSizeValue, inputColorValue, cart);
}  

 function crearCard(color, size, element) {
  const card = document.createElement('div');

  card.className ="card m-2 p-3";

  card.innerHTML = `<p>Color: ${color} </p>
  <p> Talle: ${size} </p>
  `;

  element.appendChild(card);
}

localFlores.addEventListener('mouseenter', mostrarDireccion);


function mostrarDireccion(event) {
    event.preventDefault();
      
    crearLocal("Rivadavia", "buenos aires", "18", pickup);
  }  
  
   function crearLocal(calle, ciudad, horario, element) {
    const card = document.createElement('div');
  
    card.className ="card m-2 p-3";
  
    card.innerHTML = `<p>Nombre: ${calle} </p>
    <p>Edad: ${ciudad} </p> <p>Edad: ${horario} </p>
    `;
  
    element.appendChild(card);
  }

  localFlores.addEventListener('mouseleave', borrarDireccion);

  function borrarDireccion (event) {
      event.preventDefault();
      card.parentNode.removeChild(card);

  }

 