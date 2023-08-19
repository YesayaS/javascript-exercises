const findTheOldest = function (people) {
  let sortOldest = people.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
    if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
    const ageA = a.yearOfDeath - a.yearOfBirth;
    const ageB = b.yearOfDeath - b.yearOfBirth;
    return ageB >= ageA ? 1 : -1;
  });
  return sortOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
