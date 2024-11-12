function createObject(userName, desginations) {
    return {
        user: userName,
        desgination: desginations
    };
}

function programming(users) {
    try {
        const keyset = Object.keys(users);
        const desgination = keyset.map((val) => users[val].desgination);
        const result = [];
        for (let i = 0; i < keyset.length; i++) {
            result.push(createObject(keyset[i], desgination[i]));
        }
        return result;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { programming };
