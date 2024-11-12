function pos3(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let At3 = arrayOfObjects.filter((val) => val.id === 3);
        if (At3.length === 0) {
            throw new Error("No object found with ID 3.");
        }
        return At3;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { pos3 };
