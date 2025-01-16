export function contact(content) {
  const form = createElement("div", "form");
  const chef = createElement("div", "chef");
  const manager = createElement("div", "manager");
  const waiter = createElement("div", "waiter");

  chef.textContent = `The Chef 
                      555-666-7907
                      mailToChef@gmail.com`;

  manager.textContent = `The manager 
                      555-666-7908
                      mailToManager@gmail.com`;

  waiter.textContent = `The Waiter 
                      555-666-7903
                      mailToWaiter@gmail.com`;

  form.append(manager);
  form.append(chef);
  form.append(waiter);
  content.append(form);
}

function createElement(elem, className) {
  const tag = document.createElement(elem);
  if (className) {
    tag.classList.add(className);
  }
  return tag;
}
