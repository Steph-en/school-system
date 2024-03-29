/**
 * Landing Page
 */
const left = document.querySelector(".btn");
const right = document.querySelector(".btn1");
const container = document.querySelector(".container");

// Hover Effect
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

// Click Effect
left.onclick = function () {
  this.innerHTML = "<div class='loader'></div>";
  setTimeout(() => {
    this.innerHTML = "<a href='./login.html' class='btn'>Login</a>";
  }, 10000);
};

right.onclick = function () {
  this.innerHTML = "<div class='loader'></div>";
  setTimeout(() => {
    this.innerHTML = "<a href='./login.html' class='btn'>Login</a>";
  }, 10000);
};

// async function apiCall(){
//   const res = await fetch("https://api.api-ninjas.com/v1/country?name=Ghana");
//   const jsonData = await res.json();

//   console.log({jsonData});
//   console.log(jsonData);
// }