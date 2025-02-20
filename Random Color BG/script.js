document.addEventListener("DOMContentLoaded", function () {
  const colorBtn = document.getElementById("colorButton");
  const colorCode = document.getElementById("colorCode");
  const resetBtn = document.getElementById("resetBtn");

  if (!colorBtn || !colorCode) {
    console.error("Elements not found!");
    return;
  }
  if (!colorBtn || !resetBtn || !colorCode) {
    console.error("Elements not found!");
    return;
  }
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  colorBtn.addEventListener("click", function () {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = `Current Color: ${newColor}`;
  });

  resetBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#ffffff";
    colorCode.textContent = "Current Color: #ffffff";
  });
});
