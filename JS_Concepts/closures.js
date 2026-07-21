//closures is nothing but inner function remembers/access variables of outer function or parent function variables even after outer/parent finished execution 

function outerFun(){
    let counter=0
    function innerFun(){
        counter++;
        console.log("Counter",counter)
    }
    
    return innerFun
}

const fn= outerFun()

fn()
fn()
fn()
output=1,2,3

// where we will use closures
// 1.react hooks
// 2.set setTimeout
// 3.memoization
// 4.Currying
//5.Event Listeners




// Currying is the technique of transforming a function that takes multiple arguments into a sequence of functions where each function takes one argument at a time."
function add(a){
    return function(b){
        return a+b
    }
}

console.log(add(2)(3))


//output=5