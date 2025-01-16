import restaurantImg from "../images/restaurant-background.jpg";

export function home() {
  const info = document.createElement("div");
  const heading = document.createElement("h2");
  const msg = document.createElement("div");
  const para = document.createElement("p");
  const img = document.createElement("img");

  info.classList.add("info");
  msg.classList.add("msg");
  img.classList.add("home-background");
  heading.textContent = `Welcome to Ocean's Bounty – A Taste of the Ocean!`;
  para.textContent = `At Ocean's Bounty, we take pride in serving the freshest seafood,
          carefully sourced to ensure the highest quality and flavor. Every dish
          we create is a reflection of our passion for exceptional food,
          blending traditional recipes with modern culinary techniques. From the
          rich flavors of our perfectly grilled fish to the indulgent succulence
          of our signature lobster dishes, every bite is a journey through the
          ocean’s finest offerings. Our expert chefs craft each meal with
          precision, using only the freshest ingredients, aromatic herbs, and
          flavorful spices to bring out the natural taste of the sea.`;
  img.src = restaurantImg;
  msg.append(heading);
  msg.append(para);
  info.append(msg);
  info.append(img);
  return info;
}
