function receivesAFunction(cb){
   cb();
}

function returnsANamedFunction(){
    function namedFunction() {return 2}
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function(){return 3};
}