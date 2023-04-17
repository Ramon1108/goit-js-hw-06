const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const listEl = document.createElement("li");
  listEl.textContent = el;
  listEl.classList.add("item");
  list.append(listEl);
});
