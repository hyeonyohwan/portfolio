// smooth scroll
document.querySelectorAll('div[href^="#"]').forEach((div) => {
  div.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
