function models(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        let carModel = inventory.map((car) => car.car_model);
        carModel.sort();
        return carModel;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { models };

