import { Cardcomponent } from "../component/CardComponent.js";
import {products} from  "..//data/products.js";

let renderArea = document.querySelector("#renderArea");


//  RENDER PRODUCT
products
.slice(0,10)
.map((products) =>  (renderArea.innerHTML +=Cardcomponent(products)));