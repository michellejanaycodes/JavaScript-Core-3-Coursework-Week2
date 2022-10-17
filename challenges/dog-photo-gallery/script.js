const ul = document.getElementById("unordered-list");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
let dogImg = document.getElementById("dogs-img");
let img = document.createElement("img");
let str = "";
const dogs = "https://dog.ceo/api/breeds/image/random";

btn1.addEventListener("click", () => {
  fetch(dogs)
    .then((response) => {
      return response.json();
    })
    .then((picture) => {
      img.src = picture.message;
      str = picture.message;
      img.style.maxWidth = "400px";
      dogImg.append(img);
    })
    .catch((error) => {
      dogImg.innerHTML = `Oops! ${error}`;
    });
});

btn2.addEventListener("click", () => {
  let savedImg = document.createElement("img");
  let li = document.createElement("li");
  savedImg.src = str;
  savedImg.style.maxWidth = "250px";
  li.style.listStyleType = "none";
  li.append(savedImg);
  ul.append(li);
});
