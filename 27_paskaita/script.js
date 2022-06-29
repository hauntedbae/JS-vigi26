const renderCard = (product) => {
  const { image, price, title } = product;

  const card = document.createElement("div");
  const imageEl = document.createElement("img");
  const titleEl = document.createElement("p");
  const priceEl = document.createElement("h2");
  const deleteButton = document.createElement("button");

  card.className = "card";
  priceEl.style.color = "red";

  imageEl.src = image;
  imageEl.alt = title;
  titleEl.textContent = title;
  priceEl.textContent = price;
  deleteButton.textContent = "Delete";

  card.append(imageEl, titleEl, priceEl, deleteButton);
  document.body.append(card);
};

fetch("https://golden-whispering-show.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);

    response.forEach((product) => renderCard(product));

    renderCard(response[0]);
  })
  .catch((error) => {
    console.log(error);
  });
