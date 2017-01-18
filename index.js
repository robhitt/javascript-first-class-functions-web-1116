function receivesAFunction(callback) {
  callback()
}

// function returnsANamedFunction() {
//     return ()
// }


 function returnsANamedFunction(callback){
   return function supDog(){}
}

function returnsAnAnonymousFunction(callback){
  return function(){}
}
