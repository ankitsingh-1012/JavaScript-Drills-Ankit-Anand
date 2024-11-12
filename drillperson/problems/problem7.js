function age25(arrayOfObjects) {
    try {
        if (arrayOfObjects.length === 0) {
            throw new Error("Array is empty.");
        }
        let At25 = arrayOfObjects.filter((val) => val.age === 25).map((val1) => {
            let list = [];
            list.push(`${val1.name}  ${val1.email}`);
            return list;
        });
        return At25;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { age25 };
