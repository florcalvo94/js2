/*let nombre = prompt("Ingresá tu nombre");
let apellido = prompt ("Ingresá tu apellido");


let nombreCompleto = nombre + apellido;
alert ("bienvenid@" + nombreCompleto);
console.log ("nombre completo:", nombreCompleto)

let fechaNacimiento = prompt("Ingresá tu año de nacimiento en formato AAAA: ");
var añoActual = 2021;
var edad = añoActual - fechaNacimiento;

console.log ("Fecha de nacimiento:", fechaNacimiento)
console.log ("Edad:", edad)

if ( edad < 18){
    alert ("no podes usar la pagina porque sos menor de edad")
}

alert ('Estas son las obras musicales de la semana');

const obras = ['CATS', 'DOGS', 'MOULIN ROUGE', 'LION KING'];

for (let index = 0; index <4; index++) {
    alert (obras [index]);
}
console.log('Obras recomendada', obras[1]);
console.log('Obras para niños: ', obras[3]);

console.log ('Cantidad de Obras: ', obras.length);




let input = prompt('Ingresá el nombre del show. Podes ver en consola las opciones');

function Entrada(input, horario, precio, direccion) {
    this.input = input;
    this.horario  = horario;
    this.precio  = precio;
    this.direccion = direccion;
}

const entrada1 = new Entrada (input, 20, 1000 ,"Corrientes 432");
const entrada2 = new Entrada ( input, 22, 500, "Ayacucho 987");
const entrada3 = new Entrada (input, 18, 100, "Malabia 432")
const entrada4= new Entrada (input, 19, 200, "Riobamba 100")


if ( input == "CATS") {
    alert('Elegiste el show Cats. Observa en consola los detalles');
console.log (entrada1);

console.log('Show: ', entrada1.input);
console.log('horario: ', entrada1.horario);
console.log('precio: ', entrada1.precio);
console.log('direccion: ', entrada1.direccion);

}

if ( input == "DOGS") {
    alert('Elegiste el show Dogs. Observa en consola los detalles');
console.log (entrada2);

console.log('Show: ', entrada2.input);
console.log('horario: ', entrada2.horario);
console.log('precio: ', entrada2.precio);
console.log('direccion: ', entrada2.direccion);

}

if ( input == "MOULIN ROUGE") {
    alert('Elegiste el show MOULIN ROUGE. Observa en consola los detalles');
console.log (entrada2);

console.log('Show: ', entrada3.input);
console.log('horario: ', entrada3.horario);
console.log('precio: ', entrada3.precio);
console.log('direccion: ', entrada3.direccion);

}

if ( input == "LION KING") {
    alert('Elegiste el show LION KING. Observa en consola los detalles');
console.log (entrada2);

console.log('Show: ', entrada4.input);
console.log('horario: ', entrada4.horario);
console.log('precio: ', entrada4.precio);
console.log('direccion: ', entrada4.direccion);

}


let cantidadEntradas = parseInt(prompt("Cantidad de entradas: "));

if (input =="CATS"){
    var precioFinal = entrada1.precio * cantidadEntradas;
    alert (precioFinal)
}

if (input =="DOGS"){
    var precioFinal = entrada2.precio * cantidadEntradas;
    alert (precioFinal)
}
if (input =="MOULIN ROUGE"){
    var precioFinal = entrada3.precio * cantidadEntradas;
    alert (precioFinal)
}
if (input =="LION KING"){
    var precioFinal = entrada4.precio * cantidadEntradas;
    alert (precioFinal)
}

let compañia = prompt('Ingresá tu compañia telefonica para obtener un descuento');
function descuento (compañia){

  switch(compañia){

    case 'MOVISTAR':
        alert('Tienes 25% de descuento');
        var precioDescuento = precioFinal * 0.75;
        break;

    case 'PERSONAL':
      alert('Tienes 20% de descuento');
      var precioDescuento = precioFinal * 0.80;
    
    case 'CLARO':
      alert('Tienes 15% de descuento');
      var precioDescuento = precioFinal * 0.85;
      break;

    default:
      alert('No tenes descuento');
      var precioDescuento = precioFinal * 0.75;
      break;

} while(compañia != ""); 

if (compañia == "") {
    alert('No ingresaste una compañia');
}
}

alert ("tu precio final es" + precioDescuento)

const user = prompt("ingresa tu usuario");
localStorage.setItem('usuario', user);
let usuario = localStorage.getItem('usuario');
alert("tu usuario es: " + usuario);

const enJSON = JSON.stringify(user);
localStorage.setItem("user", enJSON);

const listItems = document.getElementsByTagName('li');
for (const item of listItems) {
  item.innerHTML = item.innerHTML.toLocaleUpperCase(); 
}

const userName = document.getElementsByTagName('strong');
for (const strongItem of userName) {
  strongItem.innerHTML = user; 
}

const idioma = prompt("escribi tu idioma INGLES/ESPAÑOL");
if ( idioma == "INGLES"){
  const mainTitle = document.getElementById('mainTitle');
  mainTitle.innerHTML = 'Ticket World';
  const welcome = document.getElementById('welcome');
  welcome.innerHTML = 'Welcome to the website'+user;
  const upcoming = document.getElementById('upcoming');
  upcoming.innerHTML = 'Upcoming Events';
  const available = document.getElementById('available');
  available.innerHTML = 'Available Tickets';
  const register = document.getElementById('register');
  register.innerHTML = 'Register now';
  const merchandise = document.getElementById('merchandise');
  merchandise.innerHTML = 'Merchandise';
  const pickUp = document.getElementById('pickUp');
  pickUp.innerHTML = 'PickUp Points';
  let parrafo = document.createElement("parrafo");
  parrafo.innerHTML = "<p>register now</p>"
  document.register.appendChild(parrafo);
}

const mercaderia = prompt("Queres conocer nuestra mercadería? escribi SI/NO");
if ( mercaderia == "SI"){
let padre = document.getElementById("shoppingList");
let shoppingList = ["gorra","taza","camiseta","imanes"];
for (const shoppingItem of shoppingList) {
  let li = document.createElement("li");
  li.innerHTML = shoppingItem
  padre.appendChild(li);
}
}

//Obtener elementos por id
const contactTitle = document.getElementById('contact-title');

contactTitle.innerHTML = 'Contactame';

//Obtener elementos por clase
const sectionContact = document.getElementsByClassName('contact');
console.log(sectionContact[0]);

//Obtener elementos por tag/elemento

const nav = document.getElementsByTagName('nav');

let navListItems = document.getElementsByTagName('li');

console.log(navListItems[0].parentNode)

function transformListToUppercase(list){
  for (const item of list) {
    item.innerHTML = item.innerHTML.toLocaleUpperCase();
  }
}

for (const item of navListItems) {
  item.innerHTML = item.innerHTML.toLocaleUpperCase();
}

let unnorderedList = document.getElementById('nav-list');

//Creando elementos

let item = document.createElement('li');

item.innerHTML = 'TACTICA';
unnorderedList.appendChild(item);

let obj1 = {id: 1, name: 'Luciano'};

let main = document.getElementsByTagName('main');

let newSection = document.createElement('section');
newSection.innerHTML = `<h2> Hola Coders ${obj1.name} </h2>`

main[0].appendChild(newSection);

unnorderedList.removeChild(navListItems[3]);*/

const botonComprar = document.getElementById('buyBtn');
const inputColor = document.getElementById('color');
const inputSize = document.getElementById('size');
let cart = document.getElementById("cart");


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

  card.innerHTML = `<h2>Nombre: ${color} </h2>
  <h3>Edad: ${size} </h3>
  `;

  element.appendChild(card);
}

/*
const content = document.getElementById('content');
const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const form = document.getElementById('custom-form');

//Primera Forma addEventListenner
botonCargar.addEventListener('click', mostrarCard);

function mostrarCard(event) {
  event.preventDefault();
  const inputNameValue = inputName.value;
  const inputAgeValue = inputAge.value;

  crearCard(inputNameValue, inputAgeValue, content);
}  

 function crearCard(name, age, element) {
  const card = document.createElement('div');

  card.className ="card m-2 p-3";

  card.innerHTML = `<h2>Nombre: ${name} </h2>
  <h3>Edad: ${age} </h3>
  `;

  element.appendChild(card);
}

//Segunda forma 

/*  botonCargar.onclick = (event) => {
  crearCard('Ariel', 40, content);
}  



inputName.addEventListener('change', onNameChange);

function onNameChange(event) {
  console.log('Target:', event.target);
  console.log('Value:', event.target.value);
}

inputName.onkeydown = (event) => {
  if(event.key == 2) {
    //console.log('aprete el 2');
  }
} 

inputName.onkeyup = function(event) {
  console.log(event)
} 

form.onmouseenter = () => {
  document.body.style.backgroundColor = "green";
}


form.onmouseleave = () => {
  document.body.style.backgroundColor = "blue";
}



form.onsubmit = (e) => {
  e.preventDefault();
  if(Number(inputAge.value) < 18) {
    const alert = document.createElement('div');
    alert.className ="alert alert-danger";
    alert.innerHTML = 'Sos menor de edad'

    form.appendChild(alert);
  }
}



//Tercera forma No es recomendada ya que no es buena práctica utilizar el js en el html.*/