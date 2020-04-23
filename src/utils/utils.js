function shuffleArray(array) {
  const newArray = [];
  while (array.length) {
    const randomIndex = Math.floor(Math.random() * array.length),
      element = array.splice(randomIndex, 1);
    newArray.push(element[0]);
  }
  return newArray;
}

function getRandomCountry(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = { shuffleArray, getRandomCountry };
