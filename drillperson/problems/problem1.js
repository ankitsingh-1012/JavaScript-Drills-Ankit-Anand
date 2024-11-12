function emails(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let mail = arrayOfObjects.map((val) => val.email);
        return mail;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { emails };
