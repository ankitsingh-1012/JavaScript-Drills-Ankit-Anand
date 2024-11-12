function sortedCarModel(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        let carModel = [];
        for (let car of inventory) {
            carModel.push(car.car_model);
        }
        carModel.sort();
        return carModel;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { sortedCarModel };
