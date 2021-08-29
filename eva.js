const myArray = [1, 1, 1, 1, 1, 2, 2, 3, 3, 5, 8];

const CantNum = {}

for (let i = 1; i <= Math.max(...myArray); i++) {

    CantNum[i] = "";

}

myArray.forEach(e => CantNum[e] += "*");

console.log(CantNum);