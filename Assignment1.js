// part 1

// 1
let number = "123";
let convert = Number(number);
let add = convert + 7;
console.log(add);

// 2
let value = 0;
if(Boolean(value)){
    console.log("valid");
}else{
    console.log("InValid")
}

// 3
for(let i = 1; i<=10 ; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

// 4
let numberArr = [1, 2, 3, 4, 5];
let evenNumbers = numberArr.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// 6
let day = 2;
switch(day){
    case 1: 
        console.log("Sunday");
        break;
    case 2: 
        console.log("Monday");
        break;
    case 3: 
        console.log("Tuesday");
        break;
    case 4: 
        console.log("Wednesday");
        break;
    case 5: 
        console.log("Thursday");
        break;
    case 6: 
        console.log("Friday");
        break;
    default: 
        console.log("Saturday");
        break;
}

// 7
let stringArr = ["a", "ab", "abc"];
let lengthArr = stringArr.map(str => str.length);
console.log(lengthArr);

// 8
function isNumberdivisibleBy3And5(number){
    if(number % 3 == 0 && number % 5 == 0){
        console.log("Divisible by both");
    }else{
        console.log("Not Divisible by both");
    }
}
isNumberdivisibleBy3And5(15);

// 9
let square = (num) => num ** 2;
console.log(square(5));

// 10
const person ={
    name: 'John', 
    age: 25
}
function destructAnObject(obje){
    const {name , age} = obje;
    return `${name} is ${age} years old`;
}
console.log(destructAnObject(person));

// 11
function sumNum(...num){
    let sum = 0;
    for(let i = 0 ; i< num.length ; i++){
        sum += num[i];
    }
    return sum;
}
console.log(sumNum(1,2,3,4,5));

// 12
function promiseAfter3Seconds(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}
promiseAfter3Seconds()
    .then((message) => {console.log(message);})

// 13
function findLargestNumber(Arr){
    let largestNumber = Arr[0];
    for(let i = 1; i< Arr.length; i++){
        if(Arr[i] > largestNumber){
            largestNumber = Arr[i];
        }
    }
    return largestNumber;
}
console.log(findLargestNumber([1,3,7,2,4]));

// 14
function objectKeysOnly(obje){
    return Object.keys(obje);
}
console.log(objectKeysOnly(person));

// 15
function splitString(message){
    return message.split(" ");
}
console.log(splitString("The quick brown fox"));

// Part 2

// 1
/*
    1:forEach:it is an method in array , it is work only with array, 
            it is not use break and continue and does not work well 
            with await
    
        use when:
                1:You want to iterate over an array.
                2:You don't need to use break or continue.
                3:You are not working with async/await.

    2:for of:it is an loop that can be used with any iterable object,
            it can use break and continue and work well with await
        
        use when: 
                1:You need to use break or continue
                2:You are working with async/await.
                3:You want to iterate over any iterable

*/

//2
/*
    1: hoisting: The process of moving function and variable declarations to the top
        example :
            console.log(x);
            var x = 0;

            بيحصل
            var x;  بتاخد قيمة undefined
            console.log(x);
            x = 0;

    2:Temporal Dead Zone:the time between the entering of the scope and the variable declaration where the variable is not accessible
        example:
            console.log(x);بيطلع ايرور مينفعش ناسس عليها قبل ما تتعرف 
            let x = 0;
            console.log(x);

*/

//3
/*
    1: == : compar between only value  
    2: ===: compar between value and type
*/

// 4
/*
    how try / catch works:
        try...catch is a handling a error used to catch 
        and handle runtime errors without stopping the entire program
        try: contains code if error occurs,stops executing the try and throw error to the catch
        catch: contains code to handle the error thrown by the try block

    Why is try...catch Important in Async Operations:
        When using async/await, asynchronous operations may fail 
        Using try...catch allows you to catch these errors and handle 
        them instead of crashing the application.
*/

//5
/*
1: type conversion: The programmer is the one who changes the value type from one type to another.
        exambel : Number(value) or String(Value)
2: type coercion: This happens automatically, as the language changes the type.
        exampel : 5 - "5" = 0 
*/