function find(elements, cb,num) 
{
    for(let i=0;i<elements.length;i++)
    {
        if(cb(elements[i],num)){
            return num;
        }
    }
    return undefined;
}
export {find};