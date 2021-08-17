let buyTicket = document.getElementsByClassName("buyTicket");

let tickets = [
  {
    show: "Foo Fighters",
    tag: "foofighters",
    price: 1000,
    inCart: 0
  },
  {
    show: "Tini Stoessel",
    tag: "tinistoessel",
    price: 500,
    inCart: 0
  },
  {
    show: "Maria Becerra",
    tag: "mariabecerra",
    price: 300,
    inCart: 0
  }
];

for (let i=0; i < buyTicket.length; i++) {
  buyTicket[i].addEventListener("click", () => {
    cartItems(tickets[i]);
    totalCost(tickets[i])
  })
 }

 function onLoadCartItems () {
   let productNumbers = localStorage.getItem ("cartItems");

   if (productNumbers) {
     document.querySelector(".totalTickets span").textContent = productNumbers;
   }
 }

 function cartItems (ticket){
   
   let ticketNumbers = localStorage.getItem("cartItems");
   console.log (ticketNumbers);

   ticketNumbers = parseInt(ticketNumbers);

   if (ticketNumbers){
     localStorage.setItem("cartItems", ticketNumbers + 1);
     document.querySelector(".totalTickets span").textContent = ticketNumbers + 1;
    
   } else {
     localStorage.setItem("cartItems", 1);
     document.querySelector(".totalTickets span").textContent = 1;
   }
      setItems(ticket);
 }

 function setItems(ticket) {
   console.log ("my product is", ticket);
  let cartTickets = localStorage.getItem("ticketsInCart");
  cartTickets = JSON.parse(cartTickets);
   
  if(cartTickets != null) {
    cartTickets[ticket.tag].inCart += 1;
  } else {
    ticket.inCart = 1;
    cartTickets = {
      [ticket.tag]: ticket
    }
  }
   localStorage.setItem("ticketsInCart", JSON.stringify
   (cartTickets));
 }


function totalCost (ticket) {
  let cartCost = localStorage.getItem ("totalCost");
  
  console.log("my cart cost is", cartCost);

  if (cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem ("totalCost", cartCost + ticket.price);
  } else {
    localStorage.setItem ("totalCost", ticket.price);
  }
  localStorage.setItem ("totalCost", ticket.price);

}

onLoadCartItems ();


