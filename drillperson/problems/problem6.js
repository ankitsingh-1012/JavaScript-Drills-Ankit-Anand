function firstHobbies(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let hobbies = arrayOfObjects.map((val) => val.hobbies[0]);
        return hobbies;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { firstHobbies };
