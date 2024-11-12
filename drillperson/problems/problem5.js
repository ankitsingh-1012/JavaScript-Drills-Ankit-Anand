function agesList(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let ages = arrayOfObjects.map((val) => val.age);
        return ages;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { agesList };
