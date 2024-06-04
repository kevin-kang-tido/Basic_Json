import { Cardcomponent } from "../component/CardComponent.js";

// import {products} from  "..//data/products.js";

let renderArea = document.querySelector("#renderArea");

//  RENDER PRODUCT
// products
// .slice(0,10)
// .map((products) =>  (renderArea.innerHTML +=Cardcomponent(products)));


// Render Product new url

const Base_Url = "http://127.0.0.1:5500/data/products.json";

fetch(Base_Url)
  .then((res) => res.json())
  .then((data) => {
    let products = data;
    products.map((product) => (renderArea.innerHTML += Cardcomponent(product)));
  });
