const two = 10;
const one = 0;
let sum = two + one;
const dodanie = `Wynikiem dodawania liczby ${two} oraz ${one} jest ${sum}. Pozdrawiam!`;
//consoleconsole.log(dodanie);
//console.log(`------------------------------------------------------`);
//prosty if
if (sum > 20) {
  //console.log(`Liczba wieksza niz 20!`);
} else if (sum < 20) {
  //console.log(`Liczba mniejsza niz 20!`);
} else {
  //console.log(`Das is 20!`);
}
//console.log(`------------------------------------------------------`);
// operator trójargumentowy => to co wyżej (bez 10==10)
const sum2 =
  sum > 10 ? "Liczba wieksza od 10!" : "Liczba mniejsza lub równa 10!";
//console.log(sum2);
//console.log(`------------------------------------------------------`);
//switch
const sum1 = sum % 4;
switch (sum1) {
  case 1:
    //console.log(`Reszta z dzielenia ${sum} przez 4 to 1!`);
    break;
  case 2:
    //console.log(`Reszta z dzielenia ${sum} przez 4 to 2!`);
    break;
  case 3:
    //console.log(`Reszta z dzielenia ${sum} przez 4 to 3!`);
    break;
}
//console.log(`------------------------------------------------------`);
const literki = ["a", "b", "c", "d"];
for (let i = 0; i < literki.length; i++) {
  //console.log(literki[i]);
}
// odliczanie do 0
//console.log(`------------------------------------------------------`);
for (let a = 3; a > 0; a--) {
  //console.log(a);
}
// konwersja do bolleana
//console.log(`------------------------------------------------------`);
const vala = !!"text";
//console.log(typeof vala);
//console.log(vala);

const valb = !!"";
//console.log(typeof valb);
//console.log(valb);

const valc = !!new Boolean(valb); // <--- lol, true bo nowy obiekt, chociaz valb wywala false
//console.log(typeof valc);
//console.log(valc);
//zliczanie elementów w tablicy/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const yyy = ["a", "a", "b", "a"];

function tabCount1(tab) {
  const result = {};
  for (let i = 0; i < tab.length; i++) {
    if (result.hasOwnProperty(tab[i])) {
      result[tab[i]] += 1;
    } else {
      result[tab[i]] = 1;
    }
  }
  return result;
}

function tabCount2(tab) {
  const result = {};
  tab.forEach((element) => {
    if (result.hasOwnProperty(element)) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });
  return result;
}

let test1 = ["a", "b", "a"];
let test2 = {};
test2["a"] = 5;
test2["c"] = 6;
test2[0] = "test";
test2[0] = "jes";
test2["b"] = { a: 1, b: 2 };
//console.log(test2);
//console.log(test2["b"]["a"]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr = [0, 2, 3, 4];
x = arr;
const red = arr.reduce((a, b) => a - b + 10);
const map = arr.map((x) => (x > 2 ? x - 2 : x + 2));
//console.log(arr);
//console.log(red);
//console.log(map);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const pracownik = function (age, name) {
  this.age = age;
  this.name = name;
  pracownik.prototype.letters = function () {
    return `Ilość liter: ${this.age}`;
  };
};

const person1 = new pracownik(15, "Jakub");
//////console.log([person1.age, person1.name, person1.letters()]);
const person2 = new pracownik(12, "Zygmunt");
/////////console.log([person2.age, person2.name, person2.letters()]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Telefon {
  constructor(model, rokProdukcji) {
    this.model = model;
    this.rokProdukcji = rokProdukcji;
  }
  operationSystem() {
    if (this.rokProdukcji > 2015) {
      return console.log(`${this.model} pracuje na systemie Android`);
    } else if (this.rokProdukcji <= 2015) {
      return console.log(`${this.model} pracuje na systemie Symbian`);
    } else {
      throw `Sam nie wiem`;
    }
  }
  static compareByAge(a, b) {
    return b.rokProdukcji - a.rokProdukcji;
  }
}
const telefony = [
  new Telefon("motorola v8", 2019),
  new Telefon("nokia z", 1999),
  new Telefon("xiaomi note", 2015),
];
const TelefonyUk = [...telefony].sort(Telefon.compareByAge); // sort zmienia oryginal jebaniutki
//console.log(TelefonyUk);
//console.log(telefony);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function suma(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

///console.log(suma(5));

//
//
//
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function unique() {
  const array1 = [0, 2, 2, 3, 4, 5, 3, 0];
  function uniqueVal(arr) {
    if (!Array.isArray(arr)) {
      throw Error("Wbij tablice!");
    }
    return arr.filter((val, i) => arr.indexOf(val) === i);
  }
  console.log(uniqueVal(array1));
  //lub
  const arraySet = new Set(array1); //<---------to jest Set
  const arraySetArray = [...arraySet]; //<---------tutaj juz Array
  console.log(arraySetArray);
  console.log([...new Set(array1)]);
}
//unique();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function crossingTwoArrays() {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  function ArraysCross(arr1, arr2) {
    let result = [];
    for (let i = 0; i <= arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) !== -1) result.push(arr1[i]);
    }
    return result;
  }
  console.log(ArraysCross(array1, array2));
  //lub
  const altCrossingTwoArrays = (arr1, arr2) =>
    arr1.filter((value) => arr2.includes(value));
  console.log(altCrossingTwoArrays(array1, array2));
}
////////crossingTwoArrays();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function diff() {
  const array1 = [2, 3, 4, 5];
  const array2 = [4, 5, 6, 7];
  function difference0(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        result.push(arr1[i]);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        result.push(arr2[i]);
      }
    }
    return result;
  }
  console.log(difference0(array1, array2));
  ////lub///////////////////
  function difference2(arr1, arr2) {
    const filteredArray1 = arr1.filter((val) => !arr2.includes(val));
    const filteredArray2 = arr2.filter((val) => !arr1.includes(val));
    return [...filteredArray1, ...filteredArray2];
  }
  console.log(difference2(array1, array2));
  /////lub/////////////////
  let difference3 = array1
    .filter((x) => !array2.includes(x))
    .concat(array2.filter((x) => !array1.includes(x)));
  console.log(difference3);
  ////////////////////////
  console.log(array1, array2);
}
/////////diff();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function liczElementy() {
  const arr1 = ["a", "b", "b", "c", "a", "a"];
  const result = {};
  function getElementsCounted(array) {
    for (let i = 0; i < array.length; i++) {
      if (result.hasOwnProperty(array[i])) {
        result[array[i]] += 1;
      } else {
        result[array[i]] = 1;
      }
    }
    return result;
  }
  console.log(getElementsCounted(arr1));

  ///lub//////////
  function licz(arr) {
    return arr.reduce((a, b) => {
      if (a[b]) {
        a[b] += 1;
      } else {
        a[b] = 1;
      }
      return a;
    }, {}); //<----------------------------------------------pusty obiekt, wartosc wyjsciowa!
  }
  console.log(licz(arr1));
  ///lub//////////
  function getElementsCounted2(arr) {
    const result = {};
    arr.forEach((val) => {
      if (result.hasOwnProperty(val)) {
        result[val] += 1;
      } else {
        result[val] = 1;
      }
    });
    return result;
  }
  console.log(getElementsCounted2(arr1));
}
//liczElementy();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getUserAge(year, month, day) {
  const birthDate = new Date(year, month - 1, day);
  const todayDate = new Date();
  const yearsDiffrence = todayDate.getFullYear() - birthDate.getFullYear();
  birthDate.setFullYear(todayDate.getFullYear());
  return todayDate < birthDate ? yearsDiffrence - 1 : yearsDiffrence;
}
///////console.log(getUserAge(2000, 4, 24));
function doRandom(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//console.log(doRandom(15, 5));
//walidator nip////////////////////////////////////////////////////////////////////////////////
class ValidatorNip {
  static validateNip(nip) {
    nip = nip.replace(/[-\s]/g, "");
    const weightsOfNipNumbers = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    let sum = 0; // suma cyfr * wagi /\
    nip = nip.slice(-10); // usuniecie prefiksu kraju
    for (let i = 0; i < nip.length - 1; i++) {
      const n = parseInt(nip[i], 10); //zamiana na Number()
      sum += n * weightsOfNipNumbers[i];
    }
    const lastDigit = parseInt(nip.slice(-1), 10); //<--Zlapanie ostatniej cyfry i zamiana na Number();
    return sum % 11 === lastDigit;
  }
}
//console.log(ValidatorNip.validateNip("785 173 69 92")); //prawidłowy
//console.log(ValidatorNip.validateNip("785 111 69 92")); //nieprawidłowy

function isChecksumValid(number, weight) {
  const max = number.lenght - 1;
  let sum = 0;
  for (let i = 0; i < max; i++) {
    const n = parseInt(number[i], 10);
    sum += n * weight[i];
  }
  const resultSum = sum % 11 !== 10 ? sum % 11 : 0;
  const lastDigit = parseInt(number.slice(-1), 10);
  return resultSum === lastDigit;
}

class ValidatorRegon {
  static valRegon(regon) {
    if (regon.length !== 9 && regon.length !== 14) {
      return new Error("Zła ilość znaków!");
    }
    if (regon.lenght === 9) {
      return isChecksumValid(regon, [8, 9, 2, 3, 4, 5, 6, 7]);
    } else {
      return (
        isChecksumValid(regon.slice(0, 9), [8, 9, 2, 3, 4, 5, 6, 7]) && // sprawdzenie dla pierwszych 8
        isChecksumValid(regon, [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8]) // sprawdzenie dla wszystkich 13
      );
    }
  }
}
console.log(ValidatorRegon.valRegon("302690873"));
