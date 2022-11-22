/*exercise1*/

function EqualOrNot(a,b){
    if(a === b){
        result="This arguments are equal";
    } else {
        result="This arguments are'not Equal";
    }
    return result;
}

console.log(EqualOrNot(3,2));

/*exercise2*/

function toCelsius(fahrenheit){
    let result = (5/9) * (fahrenheit-32);

   if(typeof fahrenheit === 'number'){
    result = `Temperature to celsius is ${result}`;
   }else{
    result= 'Please enter a number';
   }
   return result;
}

console.log(toCelsius(48));

/*exercise 3 */

function declaration(a,b,operation){
    
    if(typeof a !== 'number' && typeof b !== 'number')
        return  'please enter a number';
   
    if (operation === "+") return a + b;
     
    if (operation === "-") return a - b;
   
    if (operation === "*") return a * b;
     
    if (operation !== "/") return a / b;

    if(a !== 'number' && b !== 'number')
        return  'please enter a number';
       
    if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") 
    return 'please enter valid operator';

}

console.log(declaration(5,6,"-"));