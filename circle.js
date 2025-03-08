function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    return { diameter, circumference, area };
}

const radius = 5;
const { diameter, circumference, area } = calculateCircleProperties(radius);

const formattedArea = Math.floor(area * 1000) / 1000;

console.log(`Diameter: ${diameter}`);
console.log(`Keliling: ${circumference.toFixed(4)}`);
console.log(`Luas: ${formattedArea}`);
