const hamburgerIcon = document.querySelector(".hamburger");
const navigationLinks = document.getElementById("navigation");
const navigationLinks1 = document.getElementById("navigation1");

hamburgerIcon.addEventListener("click", () => {
  navigationLinks.classList.toggle("navigation-category-content");
  navigationLinks1.classList.toggle("navigation-icons");
});

// checkbox
const appleCheckbox = document.getElementById("flexCheckDefault");
const dellCheckbox = document.getElementById("dellCheckbox");
const hpCheckbox = document.getElementById("hpCheckbox");

// product category for laptops
const apple = document.getElementsByClassName("Apple");
const dell = document.getElementsByClassName("Dell");
const hp = document.querySelectorAll(".HP");

// product category for consoles
const playstation = document.getElementsByClassName("playstation");
const xbox = document.getElementsByClassName("xbox");
const nintendo = document.getElementsByClassName("nintendo");

// checkbox for consoles
const playstationCheckbox = document.getElementById("flexCheckDefault1");
const nintendoCheckbox = document.getElementById("nintendoCheckbox");
const xboxCheckbox = document.getElementById("xboxCheckbox");

// checkbox for watches
const appleWatchesCheckbox = document.getElementById("flexCheckDefault2");
const samsungWatchesCheckbox = document.getElementById("samsungCheckbox");
const huaweiCheckbox = document.getElementById("huaweiCheckbox");

// product category for watches
const appleWatches = document.getElementsByClassName("AppleWatches");
const samsungWatches = document.getElementsByClassName("Samsung");
const huaweiWatches = document.getElementsByClassName("Huawei");

console.log(appleWatches);
console.log(samsungWatches);
console.log(huaweiWatches);
// function
appleCheckbox.addEventListener("click", function () {
  displayApple(apple, dell, hp);
});

dellCheckbox.addEventListener("click", function () {
  displayDell(apple, dell, hp);
});

hpCheckbox.addEventListener("click", function () {
  displayHP(apple, dell, hp);
});

playstationCheckbox.addEventListener("click", function () {
  displayPlaystation(playstation, xbox, nintendo);
});

nintendoCheckbox.addEventListener("click", function () {
  displayNintendo(playstation, xbox, nintendo);
});

xboxCheckbox.addEventListener("click", function () {
  displayXbox(playstation, xbox, nintendo);
});

appleWatchesCheckbox.addEventListener("click", function () {
  displayAppleWatches(appleWatches, samsungWatches, huaweiWatches);
});
huaweiCheckbox.addEventListener("click", function () {
  displayHuaweiWatches();
});

samsungWatchesCheckbox.addEventListener("click", function () {
  displaySamsungWatches();
});
// checkbox group
const laptopForm = document.getElementById("laptop");
const consolesForm = document.getElementById("consoles");
const watchesForm = document.getElementById("smartwatches");
const accessoriesForm = document.getElementById("accessories");

//looping through the nodelist
function displayApple(apple, dell, hp) {
  if (appleCheckbox.checked == true) {
    for (i = 0; i < apple.length; i++) {
      apple[i].style.display = "block";
    }
    for (d = 0; d < dell.length; d++) {
      dell[d].style.display = "none";
    }
    for (h = 0; h < hp.length; h++) {
      hp[h].style.display = "none";
    }
  } else {
    for (i = 0; i < apple.length; i++) {
      apple[i].style.display = "block";
    }
    for (d = 0; d < dell.length; d++) {
      dell[d].style.display = "block";
    }
    for (h = 0; h < hp.length; h++) {
      hp[h].style.display = "block";
    }
  }
}

function displayDell(apple, dell, hp) {
  if (dellCheckbox.checked == true) {
    for (i = 0; i < apple.length; i++) {
      apple[i].style.display = "none";
    }
    for (d = 0; d < dell.length; d++) {
      dell[d].style.display = "block";
    }
    for (h = 0; h < hp.length; h++) {
      hp[h].style.display = "none";
    }
  } else {
    for (i = 0; i < apple.length; i++) {
      apple[i].style.display = "block";
    }
    for (d = 0; d < dell.length; d++) {
      dell[d].style.display = "block";
    }
    for (h = 0; h < hp.length; h++) {
      hp[h].style.display = "block";
    }
  }
}

function displayHP(apple, dell, hp) {
  if (hpCheckbox.checked == true) {
    for (i = 0; i < apple.length; i++) {
      apple[i].style.display = "none";
    }
    for (d = 0; d < dell.length; d++) {
      dell[d].style.display = "none";
    }
    for (h = 0; h < hp.length; h++) {
      hp[h].style.display = "block";
    }
  } else {
    for (i = 0; i < apple.length; i++) {
      apple[i].style.display = "block";
    }
    for (d = 0; d < dell.length; d++) {
      dell[d].style.display = "block";
    }
    for (h = 0; h < hp.length; h++) {
      hp[h].style.display = "block";
    }
  }
}

function displayCheckboxConsoles() {
  if (consolesForm.style.display != "block") {
    laptopForm.style.display = "none";
    consolesForm.style.display = "block";
    accessoriesForm.style.display = "none";
    watchesForm.style.display = "none";
  } else {
    laptopForm.style.display = "block";
    consolesForm.style.display = "none";
    accessoriesForm.style.display = "none";
    watchesForm.style.display = "none";
  }
}

function displayCheckboxLaptops() {
  if (laptopForm.style.display != "block") {
    laptopForm.style.display = "block";
    consolesForm.style.display = "none";
    accessoriesForm.style.display = "none";
    watchesForm.style.display = "none";
  } else {
    laptopForm.style.display = "none";
    consolesForm.style.display = "block";
    accessoriesForm.style.display = "none";
    watchesForm.style.display = "none";
  }
}

function displayCheckboxAccessories() {
  if (laptopForm.style.display != "block") {
    laptopForm.style.display = "none";
    consolesForm.style.display = "none";
    accessoriesForm.style.display = "block";
    watchesForm.style.display = "none";
  } else {
    laptopForm.style.display = "block";
    consolesForm.style.display = "none";
    accessoriesForm.style.display = "none";
    watchesForm.style.display = "none";
  }
}

function displayCheckboxWatches() {
  if (watchesForm.style.display != "block") {
    laptopForm.style.display = "none";
    consolesForm.style.display = "none";
    accessoriesForm.style.display = "none";
    watchesForm.style.display = "block";
  } else {
    laptopForm.style.display = "block";
    consolesForm.style.display = "none";
    accessoriesForm.style.display = "none";
    watchesForm.style.display = "none";
  }
}

function displayPlaystation() {
  if (playstationCheckbox.checked == true) {
    for (i = 0; i < playstation.length; i++) {
      playstation[i].style.display = "block";
    }
    for (d = 0; d < xbox.length; d++) {
      xbox[d].style.display = "none";
    }
    for (h = 0; h < nintendo.length; h++) {
      nintendo[h].style.display = "none";
    }
  } else {
    for (i = 0; i < playstation.length; i++) {
      playstation[i].style.display = "block";
    }
    for (d = 0; d < xbox.length; d++) {
      xbox[d].style.display = "block";
    }
    for (h = 0; h < nintendo.length; h++) {
      nintendo[h].style.display = "block";
    }
  }
}

function displayXbox() {
  if (xboxCheckbox.checked == true) {
    for (i = 0; i < playstation.length; i++) {
      playstation[i].style.display = "none";
    }
    for (d = 0; d < xbox.length; d++) {
      xbox[d].style.display = "block";
    }
    for (h = 0; h < nintendo.length; h++) {
      nintendo[h].style.display = "none";
    }
  } else {
    for (i = 0; i < playstation.length; i++) {
      playstation[i].style.display = "block";
    }
    for (d = 0; d < xbox.length; d++) {
      xbox[d].style.display = "block";
    }
    for (h = 0; h < nintendo.length; h++) {
      nintendo[h].style.display = "block";
    }
  }
}

function displayNintendo() {
  if (nintendoCheckbox.checked == true) {
    for (i = 0; i < playstation.length; i++) {
      playstation[i].style.display = "none";
    }
    for (d = 0; d < xbox.length; d++) {
      xbox[d].style.display = "none";
    }
    for (h = 0; h < nintendo.length; h++) {
      nintendo[h].style.display = "block";
    }
  } else {
    for (i = 0; i < playstation.length; i++) {
      playstation[i].style.display = "block";
    }
    for (d = 0; d < xbox.length; d++) {
      xbox[d].style.display = "block";
    }
    for (h = 0; h < nintendo.length; h++) {
      nintendo[h].style.display = "block";
    }
  }
}

function displayAppleWatches() {
  if (appleWatchesCheckbox.checked == true) {
    for (i = 0; i < appleWatches.length; i++) {
      appleWatches[i].style.display = "block";
    }
    for (d = 0; d < huaweiWatches.length; d++) {
      huaweiWatches[d].style.display = "none";
    }
    for (h = 0; h < samsungWatches.length; h++) {
      samsungWatches[h].style.display = "none";
    }
  } else {
    for (i = 0; i < appleWatches.length; i++) {
      appleWatches[i].style.display = "block";
    }
    for (d = 0; d < huaweiWatches.length; d++) {
      huaweiWatches[d].style.display = "block";
    }
    for (h = 0; h < samsungWatches.length; h++) {
      samsungWatches[h].style.display = "block";
    }
  }
}

function displaySamsungWatches() {
  if (samsungWatchesCheckbox.checked == true) {
    for (i = 0; i < appleWatches.length; i++) {
      appleWatches[i].style.display = "none";
    }
    for (d = 0; d < huaweiWatches.length; d++) {
      huaweiWatches[d].style.display = "none";
    }
    for (h = 0; h < samsungWatches.length; h++) {
      samsungWatches[h].style.display = "block";
    }
  } else {
    for (i = 0; i < appleWatches.length; i++) {
      appleWatches[i].style.display = "block";
    }
    for (d = 0; d < huaweiWatches.length; d++) {
      huaweiWatches[d].style.display = "block";
    }
    for (h = 0; h < samsungWatches.length; h++) {
      samsungWatches[h].style.display = "block";
    }
  }
}

function displayHuaweiWatches() {
  if (huaweiCheckbox.checked == true) {
    for (i = 0; i < appleWatches.length; i++) {
      appleWatches[i].style.display = "none";
    }
    for (d = 0; d < huaweiWatches.length; d++) {
      huaweiWatches[d].style.display = "block";
    }
    for (h = 0; h < samsungWatches.length; h++) {
      samsungWatches[h].style.display = "none";
    }
  } else {
    for (i = 0; i < appleWatches.length; i++) {
      appleWatches[i].style.display = "block";
    }
    for (d = 0; d < huaweiWatches.length; d++) {
      huaweiWatches[d].style.display = "block";
    }
    for (h = 0; h < samsungWatches.length; h++) {
      samsungWatches[h].style.display = "block";
    }
  }
}
