function findThirdAngle(angleA, angleB) {
    return 180 - (angleA + angleB);
}

const a = 80;
const b = 65;
const thirdAngle = findThirdAngle(a, b);
console.log(`Sudut ketiga: ${thirdAngle}`);
