function degree(users) {
    try {
        let keyset = Object.keys(users);
        let study = keyset.filter((val) => users[val].qualification === "Masters");
        return study;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { degree };
