function selectCar(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        let selectedCar = inventory.filter((val) => val.car_make === "Audi" || val.car_make === "BMW");
        return selectedCar;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { selectCar };
