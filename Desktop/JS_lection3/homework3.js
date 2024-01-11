function myFunc(carFuel, carSize) {
    switch (carSize) {
        case "S":
            console.log(`Заправка для S авто, тип палива "${carFuel}"`);
            break;
        case "M":
            console.log(`Заправка для M авто, тип палива "${carFuel}"`);
            break;
        case "L":
            console.log(`Заправка для L авто, тип палива "${carFuel}"`);
            break;
        case "XL":
            console.log(`Заправка для XL авто, тип палива "${carFuel}"`);
            break;
        default:
            console.log("Невідомий розмір авто");
    }
}

myFunc("disel", "XL");
myFunc("gas", "M");
myFunc();  // Виклик зі значеннями за замовчуванням