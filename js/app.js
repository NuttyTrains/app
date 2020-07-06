const container = document.querySelector(".container");
const adventures = [
  {
    name: "Alpha",
    image: "images/alpha.jpg"
  },
  {
    name: "Beta",
    image: "images/beta.jpg"
  },
  {
    name: "Sampi",
    image: "images/sampi1.jpg"
  },
  {
    name: "Koppa",
    image: "images/koppa1.jpg"
  },
  {
    name: " Aleph",
    image: "images/aleph.jpg"
  },
];
const showAdventures = () => {
  let output = "";
  adventures.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Read More...</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showAdventures);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
