document.getElementById("discord").onclick = function () {
    location.href = "https://discordapp.com/users/886046838019461120";
};

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });