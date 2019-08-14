// Characters

const mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

const drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

const profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

const missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

const mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

const mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};
let charactersArray = [];
charactersArray.push(
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
);

// console.log(charactersArray);

// Weapons

const rope = { name: "rope", weight: 10 };

const knife = { name: "knife", weight: 8 };

const candleStick = { name: "candlestick", weight: 2 };

const dumbBell = { name: "dumbbell", weight: 30 };

const poison = { name: "poison", weight: 2 };

const axe = { name: "axe", weight: 15 };

const bat = { name: "bat", weight: 13 };

const trophy = { name: "trophy", weight: 25 };

const pistol = { name: "pistol", weight: 20 };

let weaponsArray = [];
weaponsArray.push(
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  trophy,
  pistol
);
// console.log(weaponsArray);
// Rooms

const dRoom = { name: "Dining Room" };

const cons = { name: "Conservatory" };

const kit = { name: "Kitchen" };

const std = { name: "Study" };

const lib = { name: "Library" };

const bRoom = { name: "Billiard Room" };

const lng = { name: "Lounge" };

const ballRoom = { name: "Ballroom" };

const hall = { name: "Hall" };

const spa = { name: "Spa" };

const lRoom = { name: "Living Room" };

const obv = { name: "Observatory" };

const thr = { name: "Theater" };

const gHouse = { name: "Guest House" };

const patio = { name: "Patio" };

let roomsArray = [];
roomsArray.push(
  dRoom,
  cons,
  kit,
  std,
  lib,
  bRoom,
  lng,
  ballRoom,
  hall,
  spa,
  lRoom,
  obv,
  thr,
  gHouse,
  patio
);
// console.log(roomsArray);

function randomSelector(arr) {
  if (arr.length === 0) return undefined;
  if (arr.length === 1) return arr[0];
  const randomCard = Math.floor(Math.random() * arr.length);
  return arr[randomCard];
}
// console.log(randomSelector(charactersArray));

function pickMistery() {
  let misteryEnvelope = {};
  misteryEnvelope.suspect = randomSelector(charactersArray);
  misteryEnvelope.room = randomSelector(roomsArray);
  misteryEnvelope.weapon = randomSelector(weaponsArray);

  return misteryEnvelope;
}

// console.log(pickMistery());

function revealMistery() {
  let misteryEnvelope = pickMistery();
  console.log(misteryEnvelope);
  console.log(
    misteryEnvelope.suspect.first_name +
      " " +
      misteryEnvelope.suspect.last_name +
      " killed Mr. Boddy using the " +
      misteryEnvelope.weapon.name +
      " in the " +
      misteryEnvelope.room.name +
      "!!!!"
  );

  return `${misteryEnvelope.suspect.first_name} ${
    misteryEnvelope.suspect.last_name
  } killed Mr. Boddy using the ${misteryEnvelope.weapon.name} in the ${
    misteryEnvelope.room.name
  }!!!!`;

  /**
   * I DARE YOU TO MAKE THIS PASS!
   */

  //   );
  //   return (
  //     misteryEnvelope.suspect.first_name +
  //     " " +
  //     misteryEnvelope.suspect.last_name +
  //     " killed Mr. Boddy using the " +
  //     misteryEnvelope.weapon.name +
  //     " in the " +
  //     misteryEnvelope.room.name +
  //     "!!!!"
  //   );
}
