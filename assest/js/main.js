const BASE_URL = " http://localhost:8080";
const cards = document.querySelector(".cards");
const more = document.querySelector(".more");
let newData;
let limit = 3;
async function getData() {
  let res = await axios(`${BASE_URL}/cards`);
  drawCards(res.data);
  newData = res.data;
}
getData();
function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
        <h5>${element.des}</h5>
              <h2>${element.name}</h2>
              <h3>$${element.price}</h3>
        `;
    cards.append(card);
  });
}

more.addEventListener("click", function () {
  limit += 3;
  drawCards(newData.slice(0, limit));
  if (limit >= newData.lenght) {
    this.remove();
  }
});
