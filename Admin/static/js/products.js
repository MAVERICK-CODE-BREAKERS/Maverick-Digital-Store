function toggleMenu() {
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}

// declaring delete button
const deleteButton = document.querySelectorAll("#delete");
const modal = document.getElementById("myModal");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

for (i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", () => {
    modal.style.display = "block";
  });
}

yesButton.onclick = function () {
  modal.style.display = "none";
};
noButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
