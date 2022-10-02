"use strict"

let albumList = document.getElementById("albums");

fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((result) => {
        result.forEach((element) => {
            let albumTitle = document.createElement("li");
            albumTitle.innerHTML = element.title;
            albumTitle.classList.add("album_title");
            albumList.append(albumTitle);
        });
    })
    .catch((error) => console.error(error));