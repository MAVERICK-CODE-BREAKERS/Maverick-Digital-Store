$(document).ready(function () {
  $(".fa-search").click(function () {
    $(".search-box").toggle();
    $(".text").focus();
  });
});

var count = document.createElement("p")
var count2 = document.createElement("p")

count.classList.add("count")
count2.classList.add("count2");
count.innerHTML = "0"
count2.innerHTML = "0";
document.getElementById("wish").appendChild(count)
document.getElementById("cart").appendChild(count2);

var list = document.querySelector("#btn")

list.onclick = function(){
  count.innerHTML++
  count2.innerHTML++;
}