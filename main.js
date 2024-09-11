async function javohir() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  const wrapper = document.querySelector(".wrapper");

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.innerHTML = `
        <div class='image-wrapper'>
          <img src="${element.image}" alt="${element.title}">
        </div>
       <div class='texts-wrapper'>
        <h2>${element.title.slice(0, 25)}</h2>
        <p>${element.description.slice(0, 25)}</p>
        <p>Price: ${element.price}</p>
        <button>Add to Cart</button>
        </div>
    `;

    wrapper.appendChild(card);
  });
}

javohir();
