function reduce(elements, cb, startingValue) 
{
    let result = startingValue !== undefined ? startingValue : elements[0];
    let startIndex=startingValue !== undefined ? 0 : 1;
    for(let i=startIndex;i<elements.length;i++)
    {
        result=cb(result,elements[i]);
    }
    return result;
}
export{reduce};