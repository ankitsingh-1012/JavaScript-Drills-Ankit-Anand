
function limitFunctionCallCount(cb, n) {
    let count=0;
    return function(args)
    {
        if(count<n)
            {
                count++;
                return cb(args);
            }
            else{
                return  null;
            }

    };
  
}
export{limitFunctionCallCount};