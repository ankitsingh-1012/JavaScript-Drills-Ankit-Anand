function pairs(obj) 
{
    let result=[];
    for(let key in obj)
    {
        let pair=[];
        pair.push(key);
        pair.push(obj[key]);
        result.push(pair);

    }

return result;
}
export {pairs};