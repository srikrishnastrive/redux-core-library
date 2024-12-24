
import {compose} from 'redux';


function removeSpace(string){
    return string.split(" ").join('');
}

function repeatString(string){
    return string + string;
}


function convertToUpper(string){
    return string.toUpperCase();
}

const input = "abcd defg hijk";

// const output  = convertToUpper(repeatString(removeSpace(input)));
// console.log(output);

const composedFunction = compose(removeSpace,repeatString,convertToUpper);
console.log(composedFunction(input));
