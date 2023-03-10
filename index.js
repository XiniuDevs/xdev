window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  document.getElementById("playlist").onclick = function () {
    location.href = "https://open.spotify.com/playlist/7aonZ65kiPiqGTFTBBK4O1?si=66e501de1e514509";
};


document.getElementById("discord").onclick = function () {
    location.href = "https://discordapp.com/users/886046838019461120";
};
