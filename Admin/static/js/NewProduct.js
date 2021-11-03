function toggleMenu() {
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }
  
  document.getElementById("stock-available").value = " ";
  document.getElementById("product-category").value = "";
  document.getElementById("form-product1").value = " ";
  document.getElementById("form-product2").value = " ";
  document.getElementById("form-product3").value = " ";
  document.getElementById("form-product4").value = " ";
  document.getElementById("form-product5").value = " ";
  
  console.log("delete");
  
  // declaring buttons
  const selectButton = document.getElementById("product-category");
  const laptopContainer = document.getElementById("sub-category");
  const consolesContainer = document.getElementById("sub-category1");
  const smartWatchesContainer = document.getElementById("sub-category2");
  const accessoriesContainer = document.getElementById("sub-category3");
  const SmartphonesContainer = document.getElementById("sub-category4");
  
  const laptopSubCategory = document.getElementById("form-product1");
  const consoleSubCategory = document.getElementById("form-product2");
  const WatchesSubCategory = document.getElementById("form-product3");
  const accessoriesCategory = document.getElementById("form-product4");
  const SmartphonesCategory = document.getElementById("form-product5");
  
  // collecting values
  selectButton.addEventListener("change", () => {
    if (selectButton.value === "Laptop") {
      laptopContainer.style.display = "block";
      consolesContainer.style.display = "none";
      SmartphonesContainer.style.display = "none";
      smartWatchesContainer.style.display = "none";
      accessoriesContainer.style.display = "none";
    } else if (selectButton.value === "Watches") {
      laptopContainer.style.display = "none";
      SmartphonesContainer.style.display = "none";
      accessoriesContainer.style.display = "none";
      consolesContainer.style.display = "none";
      smartWatchesContainer.style.display = "block";
    } else if (selectButton.value === "Consoles") {
      laptopContainer.style.display = "none";
      SmartphonesContainer.style.display = "none";
      accessoriesContainer.style.display = "none";
      consolesContainer.style.display = "block";
      smartWatchesContainer.style.display = "none";
    } else if (selectButton.value === "Accessories") {
      laptopContainer.style.display = "none";
      SmartphonesContainer.style.display = "none";
      accessoriesContainer.style.display = "block";
      consolesContainer.style.display = "none";
      smartWatchesContainer.style.display = "none";
    } else if (selectButton.value === "Smartphones") {
      SmartphonesContainer.style.display = "block";
      laptopContainer.style.display = "none";
      accessoriesContainer.style.display = "none";
      consolesContainer.style.display = "none";
      smartWatchesContainer.style.display = "none";
    } else {
      laptopContainer.style.display = "none";
      accessoriesContainer.style.display = "none";
      SmartphonesContainer.style.display = "none";
      consolesContainer.style.display = "none";
      smartWatchesContainer.style.display = "block";
    }
  });
  
  var base64String;
  
  // getting images
  const productImage = document.getElementById("file-input");
  const choosePreview = document.getElementById("img-preview");
  
  var pictureOfProduct = document.getElementById("store-form").value;
  // var base64String;
  
  productImage.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (base64String) => {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      console.log(base64String);
      pictureOfProduct = base64String;
    };
    reader.readAsDataURL(file);
  });
  
  // function gettingValues(storeForm) {
  //   console.log(storeForm);
  //   var image = document.createElement("img");
  //   image.src = "data:image/jpeg;base64," + storeForm;
  //   choosePreview.appendChild(image);
  // }
  
  // form
  
  function getDetails() {
    const nameOfProduct = document.getElementById("name-form").value;
    const stockAmountAvailable = document.getElementById("stock-form").value;
    const stockAvailable = document.getElementById("stock-available").value;
    const descriptionOfProduct = document.getElementById("description").value;
    const priceOfProduct = document.getElementById("price-form").value;
    const productSelected = document.getElementById("product-category").value;
  
    console.log(nameOfProduct);
    console.log(stockAmountAvailable);
    console.log(stockAvailable);
    console.log(descriptionOfProduct);
    console.log(priceOfProduct);
    console.log(productSelected);
  
    // console.log(productImage);
    var productSubcategory;
    var products;
  
    if (selectButton.value === "Consoles") {
      console.log(consoleSubCategory.value);
      productSubcategory = consoleSubCategory.value;
      var products = {
        nameOfProduct,
        stockAmountAvailable,
        stockAvailable,
        pictureOfProduct,
        descriptionOfProduct,
        priceOfProduct,
        productSelected,
        productSubcategory,
      };
    } else if (selectButton.value === "Laptop") {
      console.log(laptopSubCategory.value);
      productSubcategory = laptopSubCategory.value;
      var products = {
        nameOfProduct,
        stockAmountAvailable,
        stockAvailable,
        pictureOfProduct,
        descriptionOfProduct,
        priceOfProduct,
        productSelected,
        productSubcategory,
      };
    } else if (selectButton.value === "Accessories") {
      console.log(accessoriesCategory.value);
      productSubcategory = accessoriesCategory.value;
      var products = {
        nameOfProduct,
        stockAmountAvailable,
        stockAvailable,
        pictureOfProduct,
        descriptionOfProduct,
        priceOfProduct,
        productSelected,
        productSubcategory,
      };
    } else if (selectButton.value === "Watches") {
      console.log(WatchesSubCategory.value);
      productSubcategory = WatchesSubCategory.value;
      var products = {
        nameOfProduct,
        stockAmountAvailable,
        stockAvailable,
        pictureOfProduct,
        descriptionOfProduct,
        priceOfProduct,
        productSelected,
        productSubcategory,
      };
    } else if (selectButton.value === "Smartphones") {
      console.log(WatchesSubCategory.value);
      productSubcategory = SmartphonesCategory.value;
      var products = {
        nameOfProduct,
        stockAmountAvailable,
        stockAvailable,
        pictureOfProduct,
        descriptionOfProduct,
        priceOfProduct,
        productSelected,
        productSubcategory,
      };
    } else {
      console.log("nothing");
    }
    console.log(products);
  
    var array = JSON.parse(localStorage.getItem("ProductDetails"));
  
    if (array == null || array == "") {
      var array = [];
    } else {
      var array;
    }
  
    array.push(products);
  
    localStorage.setItem("ProductDetails", JSON.stringify(array));
  
    document.getElementById("name-form").value = "";
    document.getElementById("stock-form").value = "";
    document.getElementById("stock-available").value = " ";
    document.getElementById("description").value = "";
    document.getElementById("price-form").value = "";
    document.getElementById("product-category").value = "";
    document.getElementById("form-product1").value = " ";
    document.getElementById("form-product2").value = " ";
    document.getElementById("form-product3").value = " ";
    document.getElementById("form-product4").value = " ";
    document.getElementById("form-product5").value = " ";
  }
  // console.log(storeForm);
  // console.log(products);
  
  // var productsDetails = JSON.parse(localStorage.getItem("products"));
  // if (productsDetails == null) {
  //   productsDetails = [];
  // } else {
  //   var productsDetails;
  // }
  
  // productsDetails.push(products);
  
  // localStorage.setItem("products", JSON.stringify(productsDetails));
  
  // console.log(products);
  // }
  
  // const tabledisplay = document.querySelector(".display");
  // tabledisplay.innerHTML = "";
  
  // var array = JSON.parse(localStorage.getItem("products"));
  // for (i = 0; i < array.length; i++) {
  //   var newrow = document.createElement("tr");
  
  //   var eachcolFirst = document.createElement("td");
  //   var eachcolLast = document.createElement("td");
  //   var eachcolPhone = document.createElement("td");
  //   var eachcolEmail = document.createElement("td");
  //   var eachcolStack = document.createElement("td");
  //   var eachcolI = document.createElement("td");
  //   var eachcolAct = document.createElement("td");
  //   var image = document.createElement("img");
  
  //   eachcolI.innerText = i + 1;
  //   eachcolFirst.innerText = array[i].nameForm;
  //   eachcolLast.innerText = array[i].stockForm;
  //   // eachcolPhone.innerText = array[i].storeForm;
  //   // eachcolEmail.innerText = array[i].productSelected;
  //   eachcolStack.innerText = array[i].productForm;
  //   image.src = "data:image/jpeg;base64," + array[i].storeForm;
  //   image.className = "avatar";
  //   eachcolAct.appendChild(image);
  
  //   newrow.appendChild(eachcolI);
  //   newrow.appendChild(eachcolFirst);
  //   newrow.appendChild(eachcolLast);
  //   newrow.appendChild(eachcolPhone);
  //   // newrow.appendChild(eachcolEmail);
  //   newrow.appendChild(eachcolStack);
  //   newrow.appendChild(eachcolAct);
  
  //   tabledisplay.appendChild(newrow);
  // }
  