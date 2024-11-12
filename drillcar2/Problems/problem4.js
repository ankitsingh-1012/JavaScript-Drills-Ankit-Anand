function years(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        let carYears = inventory.map((car) => car.car_year);
        return carYears;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { years };
