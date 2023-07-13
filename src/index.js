//Challenge 1
function cheer() {
  alert("Hooray!");
}
let showCheer = document.querySelector("button");
showCheer.addEventListener("click", cheer);

//Challenge 2
function password(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`Your password is ${passwordInput.value}`);
}
let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", password);

//Challenge 3
function userEmail(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let userInput = document.querySelector("#username-input");
  alert(
    `Your email is ${emailInput.value}, and your username is ${userInput.value}`
  );
}
let emailUserForm = document.querySelector("#signup-form");
emailUserForm.addEventListener("submit", userEmail);
