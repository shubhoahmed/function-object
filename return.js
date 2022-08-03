//This function is about Marco filling station total sales money and how much litre sold in a day.

function totalSales(aShift, bShift) {
    console.log('Day Shift: ', aShift, 'Night Shift: ', bShift);
    let shiftTotals = aShift + bShift;
    console.log('Total Money: ', shiftTotals);
    let rate = 57;
    let totalLitres = shiftTotals / rate;
    return totalLitres;
}
let perShiftMoneyA = 32154;
let perShiftMoneyb = 29541;
let totalLitresSales = totalSales(perShiftMoneyA, perShiftMoneyb);
console.log('Todays total sale - ', totalLitresSales.toFixed(2), ' Litter');

//This is for SR Enterprise to maintain cylinder stock

