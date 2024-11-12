function values(obj){
    let result=[];
    for(let key in obj)
    {
        result.push(obj[key]);

    }
    return result;
}
export{values};