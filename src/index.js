import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (var i = 1; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}