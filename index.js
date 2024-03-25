function receivesAFunction(callback) {
    callback();
    
}
function callBack() {
    console.log('Callback function has been called')
}
const receivesAFunction = callBack
 

function  returnsANamedFunction() {
    return function () {
        console.log('This is a named function')   
    }
}
const myNamedFunction = returnsANamedFunction();

function returnsAnonymousFunction() {
    return function() {
        console.log('This is a an anonymous function')
    }
}
const myAnonymousFunction = returnsAnonymousFunction


