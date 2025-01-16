import lobsterPic from "../images/lobster.webp";
import shrimpPic from "../images/shrimp.jpg";
import salmonPic from "../images/salman.jpg";
import pastaPic from "../images/pasta.jpg";
import fishPic from "../images/fish-and-chips.webp";

export function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const lobster = createImage(lobsterPic);
  const shrimp = createImage(shrimpPic);
  const salmon = createImage(salmonPic);
  const pasta = createImage(pastaPic);
  const fish = createImage(fishPic);

  const lobsterDetails = createElement(
    "Grilled Garlic Butter Lobster – Succulent lobster grilled to perfection and drizzled with a rich garlic butter sauce.",
  );
  const shrimpDetails = createElement(
    "Spicy Cajun Shrimp – Juicy shrimp sautéed in a bold and flavorful Cajun spice mix.",
  );
  const salmonDetails = createElement(
    "Lemon Herb Grilled Salmon – Fresh salmon fillet marinated in lemon juice, herbs, and olive oil, then grilled for a smoky taste.",
  );
  const fishDetails = createElement(
    "Classic Fish & Chips – Crispy, golden-battered fish served with crunchy fries and tangy tartar sauce.",
  );
  const pastaDetails = createElement(
    "Seafood Pasta Alfredo – A creamy pasta dish loaded with shrimp, scallops, and clams, tossed in a rich Alfredo sauce.",
  );

  menuContainer.append(lobster);
  menuContainer.append(lobsterDetails);
  menuContainer.append(shrimp);
  menuContainer.append(shrimpDetails);
  menuContainer.append(salmon);
  menuContainer.append(salmonDetails);
  menuContainer.append(fish);
  menuContainer.append(fishDetails);
  menuContainer.append(pasta);
  menuContainer.append(pastaDetails);

  return menuContainer;
}

function createImage(img) {
  const tag = document.createElement("img");
  tag.classList.add("menu-items");
  tag.src = img;
  return tag;
}

function createElement(content) {
  const tag = document.createElement("div");
  tag.textContent = content;
  return tag;
}
