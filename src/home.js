import restaurantImg from "/home/darkprince/Downloads/restaurant-background.jpg";

export function home(content) {
  const info = document.createElement("div");
  const heading = document.createElement("h2");
  const para = document.createElement("p");
  const img = document.createElement("img");

  info.classList.add("info");
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
  info.append(heading);
  info.append(para);
  info.append(img);
  content.append(info);
}
