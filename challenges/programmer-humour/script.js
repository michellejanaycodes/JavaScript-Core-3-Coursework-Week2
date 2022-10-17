const comic = "https://xkcd.now.sh/?comic=latest";
const main = document.getElementById("main");
let img = document.createElement("img");

fetch(comic)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Something went wrong");
  })
  .then((comicData) => {
    console.log(comicData);
    img.src = comicData.img;
    img.alt = comicData.alt;

    main.append(img);
  })
  .catch((error) => {
    console.log(error);
  });
