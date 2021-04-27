const rgbColors = [
  [148, 0, 211], [75, 0, 130], [0, 0, 255], [0, 255, 0], [255, 255, 0], [255, 127, 0], [255, 0, 0],
];
const stringifyRGB = (RGBvals) => `rgb(${RGBvals.toString()})`;

const rectangles = document.querySelectorAll('[data-id]');

const shuffleElements = (array) => {
  let randArray = array.map((n) => [n, Math.random()]);
  randArray = randArray.sort((a, b) => (a[1] - b[1]));
  return randArray.map((el) => el[0]);
};

const shuffleColors = () => {
  const shuffledColors = shuffleElements(rgbColors);
  shuffledColors.forEach((color, i) => {
    rectangles[i].setAttribute(
      'style', `background-color: ${stringifyRGB(color)};`,
    );
  });
};
document.getElementById('shuffle-btn').onclick = shuffleColors;
document.onreadystatechange = shuffleColors;
