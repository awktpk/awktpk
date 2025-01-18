// Фоновые лепестки сакуры
const createSakura = () => {
    const container = document.querySelector("#sakura-container");
    const leaf = document.createElement("div");
    leaf.className = "sakura-leaf";
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = Math.random() * 5 + 5 + "s";
    container.appendChild(leaf);
  
    setTimeout(() => {
      leaf.remove();
    }, 10000);
  };
  
  // Генерация лепестков каждые 300 мс
  setInterval(createSakura, 300);
  
  // Автоплей музыки
  window.addEventListener("load", () => {
    const audio = document.querySelector("audio");
    audio.volume = 0.5;
    audio.play();
  });
  