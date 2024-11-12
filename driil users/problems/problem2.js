function german(users) {
    try {
        let keyset = Object.keys(users);
        let germany = keyset.filter((val) => users[val].nationality === "Germany");
        return germany;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { german };
