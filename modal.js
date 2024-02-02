let modal = document.getElementById("myModal");

// Get the button that opens the modal
let trainerBtn = document.getElementById("payTrainerButton");
let explorerBtn = document.getElementById("payExplorerButton");

let email = document.getElementById("email-input")
let form = document.getElementById("donate-form")
let headerModal = document.getElementById("headerModal")
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
var value = ""

const makeOrder = (email, bundle) => {
	const data = {
		"mail": email.value,
		"bundle": bundle
	};
  fetch("https://donate.pokeworldonline.com:8443/api/v1/donate/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then(res => res.text())
  .then(response => {
    window.location.replace(response);
  })  
};

// When the user clicks on the button, open the modal

trainerBtn.onclick = function () {
	headerModal.innerHTML = "Adquirir o Trainer Founder Pack"
  modal.style.display = "block";
  value = "trainer";
};

explorerBtn.onclick = function () {
	headerModal.innerHTML = "Adquirir o Explorer Founder Pack"
  modal.style.display = "block";
  value = "explorer";
};


const submitDonate = (event) => {
  if (value != "") {
    makeOrder(email, value);
  }
  event.preventDefault();
  cleanForm();
}
form.addEventListener("submit", submitDonate);

const cleanForm = () => {
  email.value = "";
  value = "";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
 cleanForm();
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    cleanForm();
    modal.style.display = "none";
  }
};
