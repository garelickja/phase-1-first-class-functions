function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    return function named() {
        console.log()
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log()
    }
}