const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);

const toggleButton = document.getElementById("mode-toggle");
const body = document.body;
const div = document.getElementById("box");

function ligtOrDark(){
  // if it was dark mode
  if (body.classList.contains("dark-mode")){
    // button color and text
    toggleButton.textContent = "Switch to Dark Mode";
    toggleButton.classList = "dark-mode";
    // body color
    body.classList = "light-mode";
    div.classList = "light-mode main_box";
  } else if (body.classList.contains("light-mode")){
    // button color and text
    toggleButton.textContent = "Switch to Light Mode";
    toggleButton.classList = "light-mode";
    // body color
    body.classList = "dark-mode";
    div.classList = "dark-mode main_box";
  }
}