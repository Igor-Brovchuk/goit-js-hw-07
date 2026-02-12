const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const liCount = item.querySelectorAll("ul li").length;
  console.log(title);
  console.log(liCount);
});
