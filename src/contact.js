export function contact() {
  const contactInfo = createElement("div", "contactInfo");
  const form = createElement("div", "form");
  const chef = createElement("div", "contact-details");
  const line1 = createElement("hr", "line");
  const manager = createElement("div", "contact-details");
  const line2 = line1.cloneNode(true);
  const waiter = createElement("div", "contact-details");

  chef.textContent = `Chef 

                      Vinsmoke Sanji
                      555-666-7907
                      mailToChef@gmail.com`;

  manager.textContent = `Manager 

                      Roronoa Zoro
                      555-666-7908
                      mailToManager@gmail.com
`;

  waiter.textContent = `Waitress 

                      Cat Bulgler Nami
                      555-666-7903
                      mailToWaiter@gmail.com`;

  form.append(manager);
  form.append(line1);
  form.append(chef);
  form.append(line2);
  form.append(waiter);
  contactInfo.append(form);
  return contactInfo;
}

function createElement(elem, className) {
  const tag = document.createElement(elem);
  if (className) {
    tag.classList.add(className);
  }
  return tag;
}
