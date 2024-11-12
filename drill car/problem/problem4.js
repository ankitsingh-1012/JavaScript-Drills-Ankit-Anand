function carInYear(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        let carYear = [];
        for (let car of inventory) {
            carYear.push(car.car_year);
        }
        return carYear;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { carInYear };
