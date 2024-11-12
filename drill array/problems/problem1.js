function each(elements, cb)
{
    const array=[];
    for(let i=0;i<elements.length;i++)
    {
        const num=cb(elements[i],i);
        array.push(num);
    }
    return array;
    
}
export {each};