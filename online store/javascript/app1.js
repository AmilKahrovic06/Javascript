const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const card = document.querySelector(".productDetails"); //greska!!!!!!id html i klasa
console.log(card);
async function getItemDetails() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

function displayItemDetails(product) {
  const itemName = document.createElement("h2");
  itemName.innerHTML = product.title;

  const productImg = document.createElement("img");
  productImg.src = product.image;

  const productPrice = document.createElement("p");
  productPrice.className="price";
  productPrice.innerHTML = "$"+product.price;

  const productDescription=document.createElement("p");
  productDescription.innerHTML = "description: "+product.description;

  const rate=document.createElement("p");
  rate.innerHTML="rating: "+product.rating.rate;

  const count=document.createElement("p");
  count.innerHTML=product.rating.count +" piece left";

    card.appendChild(itemName);
    card.appendChild(productImg);
    card.appendChild(productPrice);
    card.appendChild(count);
    card.appendChild(rate);
    card.appendChild(productDescription);

}

getItemDetails().then((e) => {
  console.log(e);
  displayItemDetails(e);
});
