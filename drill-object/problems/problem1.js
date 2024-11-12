function keys(obj){
    let result=[];
    for(let key in obj){
        result.push(key);
    }
    return result;
}
export {keys};