function student(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let info = arrayOfObjects.filter((val) => val.isStudent === true).map((val1) => val1.name);
        return info;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { student };
