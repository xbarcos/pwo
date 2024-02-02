let modal = document.getElementById("myModal");
let trainerBtn = document.getElementById("payTrainerButton");
let explorerBtn = document.getElementById("payExplorerButton");
let email = document.getElementById("email-input")
let form = document.getElementById("donate-form")
let headerModal = document.getElementById("headerModal")
let span = document.getElementsByClassName("close")[0];
var value = ""

const makeOrder = (email, bundle) => {
	const data = {
		"mail": email.value,
		"bundle": bundle
	};
  fetch("https://playpwo.store:8443/api/v1/donate/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then(res => res.text())
  .then(response => {
     console.log(response);
     window.location.replace(response);
   })  
};

function startLoading() {
  const loaderContainer = document.getElementById('loader-container');
  loaderContainer.style.display = 'flex';
}

// When the user clicks on the button, open the modal

trainerBtn.onclick = function () {
	headerModal.innerHTML = "Adquirir o Trainer Founder Pack"
  modal.style.display = "block";
  value = "new-trainer";
};

explorerBtn.onclick = function () {
	headerModal.innerHTML = "Adquirir o Explorer Founder Pack"
  modal.style.display = "block";
  value = "kanto-explorer";
};


const submitDonate = (event) => {
  if (value != "") {
    startLoading();
    makeOrder(email, value);
  }
  else {
    modal.style.display = "none";
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
