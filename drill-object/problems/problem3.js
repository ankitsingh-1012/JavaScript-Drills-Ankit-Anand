function mapObject(obj, cb){
    const result={};
    for(let key in obj)
    {
        result[key]=cb(obj[key],key,obj);
    }
    return result;
}
export {mapObject};