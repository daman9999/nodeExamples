// normal function

function add(a,b)
{
    return a+b;
}


// anonymous function jis da naam na howe
///////// ithr function(a,b)--> anonymous function aa is function 0 da naam nahi aa kuj v
var add = function (a,b)
{
    return a+b;
}

// callback function ====> function andr function call karna


function complexExample(add){
console.warn(add(200,300))
}


complexExample(add)

// anaonymous function with callback

// complexExample have callback function as calback 
complexExample(
    // anonymous function 
    function (a,b)
    {
        return a+b;
    }



)
