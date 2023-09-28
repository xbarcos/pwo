function logSubmit(event) {
  log.textContent = `Formulário Submetido! Time stamp: ${event.timeStamp}, ${input.value}`;
  console.log(input.value)
  event.preventDefault();
}
const input = document.getElementById("input")
const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
