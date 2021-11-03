displayProducts();

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

function displayProducts() {
  var array = JSON.parse(localStorage.getItem("ProductDetails"));
  const tableContainer = document.querySelector(".table-body");
  tableContainer.innerText = "";
  if (array == null) {
    alert("Storage is empty");
  } else {
    for (i = 0; i < array.length; i++) {
      const tableRow = document.createElement("tr");
      tableContainer.appendChild(tableRow);

      // various columns in a table;
      var colSN = document.createElement("td");
      var colNameOfProduct = document.createElement("td");
      var colDescription = document.createElement("td");
      var colProduct = document.createElement("td");
      var colProductSubCategory = document.createElement("td");
      var colProductImage = document.createElement("td");
      var colPrice = document.createElement("td");
      var image = document.createElement("img");
      var colStatus = document.createElement("td");
      var colStockAvailable = document.createElement("td");
      var colButtons = document.createElement("td");

      // buttons
      const editButton = document.createElement("i");
      const deleteButton = document.createElement("i");

      // icon classnames
      editButton.innerHTML = `<a href="product_details.html"><i class="fa fa-pencil" id = ${i} aria-hidden="true"></i></a>`;
      deleteButton.innerHTML = `<i class="fa fa-trash"id = ${i} aria-hidden="true"></i>`;

      // attaching the contents for the table row
      image.className = "avatar";
      colSN.innerText = i + 1;
      colNameOfProduct.innerText = array[i].nameOfProduct;
      colDescription.innerText = array[i].descriptionOfProduct;
      colProduct.innerText = array[i].productSelected;
      colProductSubCategory.innerText = array[i].productSubcategory;
      colPrice.innerText = array[i].priceOfProduct;
      image.src = "data:image/jpeg;base64," + array[i].pictureOfProduct;
      colStatus.innerText = array[i].stockAvailable;
      colStockAvailable.innerText = array[i].stockAmountAvailable;
      colButtons.appendChild(editButton);
      colButtons.appendChild(deleteButton);

      // attaching the contents for the table row
      colProductImage.appendChild(image);
      tableRow.appendChild(colSN);
      tableRow.appendChild(colProductImage);
      tableRow.appendChild(colNameOfProduct);
      tableRow.appendChild(colDescription);
      tableRow.appendChild(colProduct);
      tableRow.appendChild(colProductSubCategory);
      tableRow.appendChild(colPrice);
      tableRow.appendChild(colStockAvailable);
      tableRow.appendChild(colStatus);
      tableRow.appendChild(colButtons);
    }

    // Delete Button
    const deleteicon = document.querySelectorAll(".fa-trash");
    for (var d = 0; d < deleteicon.length; d++) {
      deleteicon[d].addEventListener("click", function () {
        deleteItem(this.id, array);
      });
    }
  }
}

deleteItem = (index, array) => {
  if (array == null) {
    alert("Storage is empty");
  } else {
    modal.style.display = "block";
    yesButton.addEventListener("click", function () {
      deleteIconItem(this.id, array);
    });
  }
};

// for (i = 0; i < deleteButton.length; i++) {
//   deleteButton[i].addEventListener("click", () => {
//     modal.style.display = "block";
//   });
// }

deleteIconItem = (index, array) => {
  array.splice(index, 1);
  localStorage.setItem("ProductDetails", JSON.stringify(array));
  location.reload();
};
noButton.onclick = function () {
  modal.style.display = "none";
};

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
