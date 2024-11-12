function cacheFunction(cb)
{
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache.hasOwnProperty(key)){
            console.log("call back function is not calling");
            return cache[key];
        }else{
            console.log("call back function is calling");
            const result = cb(...args);
            cache[key] = result;
            return result;
        }
    }
}

export{
    cacheFunction
};