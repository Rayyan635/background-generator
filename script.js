const css = document.querySelector("h3");
const [color1, color2] = document.querySelector(".color");
const body = document.getElementById("#gradient");

backGradient = () => {
  body.style.background = linearGradient();
  css.textContent = body.style.background + ";";
};

linearGradient = () => {
  return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

color1.addEventListener("input", backGradient);
color2.addEventListener("input", backGradient);
