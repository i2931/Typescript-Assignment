"use strict";
//Written by: M Imran Ashraf
// Roll No. : 00379541
function storeCarInfo(manufacturer, modelName, ...extras) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extras));
    return carInfo;
}
const car = storeCarInfo('Toyota', 'Camry', { color: 'blue' }, { features: ['navigation', 'sunroof'] });
console.log(car);
