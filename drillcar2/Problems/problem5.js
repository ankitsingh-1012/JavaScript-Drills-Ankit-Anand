function older(years) {
    try {
        if (years.length === 0) {
            throw new Error("No years available.");
        }
        let oldCars = years.filter((carYear) => carYear > 2000);
        return oldCars;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { older };
