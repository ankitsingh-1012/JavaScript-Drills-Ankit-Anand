function hobbies(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let hobbies30 = arrayOfObjects.filter(val => val.age === 30);
        if (hobbies30.length === 0) {
            throw new Error("No person found with age 30.");
        }
        return hobbies30[0].hobbies;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { hobbies };

