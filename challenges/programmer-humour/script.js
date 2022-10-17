const comic = "https://xkcd.now.sh/?comic=latest";
const main = document.getElementById("main");
let img = document.createElement("img");

fetch(comic)
  .then((response) => {
    return response.json();
  })
  .then((comicData) => {
    console.log(comicData);
    img.src = comicData.img;
    img.alt = comicData.alt;

    main.append(img);
  })
  .catch((error) => {
    main.innerHTML = `Oops! ${error}`;
  });
