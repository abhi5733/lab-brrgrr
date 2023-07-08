// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}


function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    // console.log("patty")
  } else {
    patty.style.display = "none";
    // console.log("not-patty")
  }
}


function renderCheese() {
  let cheese = document.getElementById("cheese")
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM

  if (state.Cheese) {
    cheese.style.display = "inherit";
    // console.log("patty")
  } else {
    cheese.style.display = "none";
    // console.log("not-patty")
  }

}

function renderTomatoes() {
  let tomato = document.getElementById("tomato")
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM

  if (state.Tomatoes) {
    tomato.style.display = "inherit";
    // console.log("patty")
  } else {
    tomato.style.display = "none";
    // console.log("not-patty")
  }

}

function renderOnions() {
  let onion = document.getElementById("onion")
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM

  
  if (state.Onions) {
    onion.style.display = "inherit";
    // console.log("patty")
  } else {
    onion.style.display = "none";
    // console.log("not-patty")
  }

}

function renderLettuce() {

  let lettuce = document.getElementById("lettuce")

  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM

  if (state.Lettuce) {
    lettuce.style.display = "inherit";
    // console.log("patty")
  } else {
    lettuce.style.display = "none";
    // console.log("not-patty")
  }


}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button


document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes ;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button


document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions ;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce ;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons(){

  let butoon = document.getElementsByClassName("button")
  
  arr=[...butoon]

  arr.forEach((elem) => {
     if(!state[elem.textContent]){
      elem.classList.remove("active")
     }else{
      elem.classList.add("active")
     }
  });
 
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard(){

  let item = document.getElementsByClassName("items")

  let arr = [...item]

  arr.forEach(elem=>{
    
    if(state[elem.textContent]){
      elem.style.display="block"
     }else{
      elem.style.display="none"
     }

  })



}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice(){
  let price1 = document.querySelector('.price-details')


  let item = document.getElementsByClassName("items")

  let arr = [...item]
let sum = 0 
  arr.forEach(elem=>{
    if(state[elem.textContent]){
      sum += ingredients[elem.textContent]
     }

  })
  console.log(sum)
  price1.textContent = sum

}


