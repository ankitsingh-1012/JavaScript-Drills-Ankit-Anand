function userInterested(users) {
    try {
        let keySet = Object.keys(users);
        let videoGame = keySet.filter((val) =>
            users[val].interests[0].includes("Video Games")
        );
        return videoGame;

        // const userName = [];
        // for(let i = 0; i < keySet.length; i++){
        //     if(users[keySet[i]].interests[0].includes("Video Games")){
        //         userName.push(keySet[i]);
        //     }
        // }
        // return keySet.filter((val) => 
        //     users[val].interests[0].includes("Video Game"));
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { userInterested };
