function calculateDateDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Miliseconds in one day
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

const date1 = "2024-03-19";
const date2 = "2024-03-21";
const difference = calculateDateDifference(date1, date2);
console.log(`Selisih hari: ${difference}`);
