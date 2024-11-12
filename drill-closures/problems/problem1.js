function counterFactory() {
    let counter=0;
    return {
        increment:()=>
        {
            counter++;
            return counter;
        },
        decrement:()=>
        {
            counter--;
            return counter;
        }
    };
}
export {counterFactory};