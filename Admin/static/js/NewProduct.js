function toggleMenu() {
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}

console.log("delete");

// declaring buttons
const selectButton = document.getElementById("country");
const laptopContainer = document.getElementById("sub-category");
const consolesContainer = document.getElementById("sub-category1");
const smartWatchesContainer = document.getElementById("sub-category2");
const accessoriesContainer = document.getElementById("sub-category3");
// collecting values
selectButton.addEventListener("change", () => {
  if (selectButton.value === "Laptop") {
    laptopContainer.style.display = "block";
    consolesContainer.style.display = "none";
    smartWatchesContainer.style.display = "none";
    accessoriesContainer.style.display = "none";
  } else if (selectButton.value === "Watches") {
    laptopContainer.style.display = "none";
    accessoriesContainer.style.display = "none";
    consolesContainer.style.display = "none";
    smartWatchesContainer.style.display = "block";
  } else if (selectButton.value === "Consoles") {
    laptopContainer.style.display = "none";
    accessoriesContainer.style.display = "none";
    consolesContainer.style.display = "block";
    smartWatchesContainer.style.display = "none";
  } else if (selectButton.value === "Accessories") {
    laptopContainer.style.display = "none";
    accessoriesContainer.style.display = "block";
    consolesContainer.style.display = "none";
    smartWatchesContainer.style.display = "none";
  } else {
    laptopContainer.style.display = "none";
    accessoriesContainer.style.display = "none";
    consolesContainer.style.display = "none";
    smartWatchesContainer.style.display = "block";
  }
  console.log(selectButton.value === "Watches");
});

// selectButton.addEventListener("change", () => {
//   if (selectButton.value === "Consoles") {
//     laptopContainer.style.display = "none";
//     consolesContainer.style.display = "block";
//     accessoriesContainer.style.display = "none";
//     smartWatchesContainer.style.display = "none";
//   } else {
//     laptopContainer.style.display = "block";
//     smartWatchesContainer.style.display = "none";
//     accessoriesContainer.style.display = "none";
//     consolesContainer.style.display = "none";
//   }
// });

// selectButton.addEventListener("change", () => {
//   if (selectButton.value === "Watches") {
//     laptopContainer.style.display = "none";
//     smartWatchesContainer.style.display = "block";
//     consolesContainer.style.display = "none";
//     accessoriesContainer.style.display = "none";
//   } else {
//     laptopContainer.style.display = "none";
//     smartWatchesContainer.style.display = "none";
//     accessoriesContainer.style.display = "none";
//     consolesContainer.style.display = "none";
//   }
//   console.log(selectButton.value === "laptop");
// });
