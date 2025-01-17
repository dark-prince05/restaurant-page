import "./style.css";
import { home as homeTab } from "./home.js";
import { menu as menuTab } from "./menu.js";
import { contact as contactTab } from "./contact.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

const home = homeTab();
const menu = menuTab();
const contact = contactTab();
console.log(contact);

window.addEventListener("load", () => {
  content.append(contact);
  homeBtn.classList.add("borderB");
});

homeBtn.addEventListener("click", () => {
  content.textContent = "";
  content.append(home);
  homeBtn.classList.add("borderB");
  menuBtn.classList.remove("borderB");
  contactBtn.classList.remove("borderB");
});

menuBtn.addEventListener("click", () => {
  content.textContent = "";
  content.append(menu);
  menuBtn.classList.add("borderB");
  homeBtn.classList.remove("borderB");
  contactBtn.classList.remove("borderB");
});

contactBtn.addEventListener("click", () => {
  content.textContent = "";
  content.append(contact);
  contactBtn.classList.add("borderB");
  menuBtn.classList.remove("borderB");
  homeBtn.classList.remove("borderB");
});
