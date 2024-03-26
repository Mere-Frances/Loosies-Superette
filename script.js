


let openHam = document.getElementById("openHam")
let closeHam = document.getElementById("closeHam");
let navigationItems = document.getElementById("navigationItems");

const hamburgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
}

//  add click event functions to correct parameters

openHam.addEventListener("click", () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener("click", () => hamburgerEvent("none", "none", "block"));



console.log("submit button is working");

// submit button

let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (event) {
  console.log("button is working");
  event.preventDefault();
});


document.getElementById('booking-form').addEventListener('submit', function (event) {
  var inputs = this.querySelectorAll('input, textarea');
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      event.preventDefault();
      alert('Please fill in all required fields.');
      return;
    }
  }
});

