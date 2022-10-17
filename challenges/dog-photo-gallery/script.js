const ul = document.getElementById("unordered-list");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
let img = document.createElement("img");
let li = document.createElement("li");

const dogs = "https://dog.ceo/api/breeds/image/random";

fetch(dogs).then((response) => {
  console.log(response);
});
