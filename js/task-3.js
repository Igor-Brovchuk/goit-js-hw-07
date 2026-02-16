const userName = document.querySelector("#name-input");
const userNameSpan = document.querySelector("#name-output");

userName.addEventListener("input", () => {
  const value = userName.value.trim();
  userNameSpan.textContent = value || "Anonymous";
});
userName.addEventListener("blur", () => {
  userName.value = "";
  userNameSpan.textContent = "Anonymous";
});
