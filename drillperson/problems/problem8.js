function address(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let location = arrayOfObjects.map((val) => {
            let list = [];
            list.push(`${val.city}    ${val.country}`);
            return list;
        });
        return location;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { address };
