const ulEl = document.querySelector("#categories");
const ulList = ulEl.children;

console.log("Number of categories:", ulList.length);

const ulItem = document.querySelectorAll("li.item");
ulItem.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const numbersOfChildren = el.querySelectorAll("li").length;
  console.log(`Category: ${title}
Elements: ${numbersOfChildren}`);
});
