// const first = { a: 2 };
// const second = { a: 2 };
// const third = second;
// if (third === second) {
//     console.log('they are same')
// } else {
//     console.log('different');
// }

// do not use this method to compare object or array
// const first = { a: 2, c: 58 };
// const second = { a: 1, c: 88 };
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if (firstString === secondString) {
//     console.log('same');
// } else {
//     console.log('different');
// }

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys === secondKeys) {
        return true;
    } else {
        return false;
    }
}

// const isSame = compareObject(first, second);
// console.log(isSame);

const obj = { a: 1, b: 7, c: 3, length: 2 };
// console.log(Object.keys(obj).length);

const obj1 = { module: 35, video: 2 };
const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name"; console.log(getGirlFriend());
console.log(getGirlFriend());
