function map(elements, cb) 
{
    let result=[];
    for(let i=0;i<elements.length;i++)
    {
        let val= cb(elements[i],i);
        result.push(val);
    }
    return result;
}
export {map};