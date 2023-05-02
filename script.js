// console.log("Hello World");
// // var let const
// var a=10;
// console.log(a);
// var a=20;
// console.log(a);
// let d=23;
// console.log(d);;

// {
//     let d=56;
//     console.log(d);
// }
// let a = 10;
// let b = 50;
// let c = a+b;
// let d = a-b;
// let e = a*b;


// console.log(c);
// console.log(e);
// console.log(d);


// let car={
//     model:"polo",
//     color:"white",
//     price:"4000000",

// }
// console.log(car);
// console.log(`${car.color} ${car.model}`);

// let person={
//     name:"Thomas",
//     clg:"christ",
//     class:"4",
//     address:{ 
//         hname:"vathakkattil",
//         street:"mapranam",
//     }
// }    


// console.log(person);
// console.log(`name and hname are: ${person.name} ${person.address.hname}`);

//array
 
// let fruits=["apple","orange","grapes"];

// console.log(fruits.length);
// fruits.push("pine"); // add ele to back of array
// console.log(fruits);
// fruits.unshift("dragon"); // add ele  from front
// console.log(fruits);
// fruits.pop();// to delete last element
// console.log(fruits);
// fruits.shift(); // to delete first element
// console.log(fruits);

// let todo=[
//     {
//         id:1,
//         task:" buy books"

//     },
//     {
//         id:2,
//         task:"Buy vegetables"

//     },
//     {
//         id:3,
//         task:"water them"

    

//     }

// ]

// console.log(todo);
// console.log(todo[2].task);

// function
// function addTwoNumbers(a,b) {

// console.log(a+b);
// }
// function subtractTwoNumbers(a,b) {

//     console.log(a-b);
//     }
// function multiplyTwoNumbers(a,b) {

//         console.log(a*b);
        
// }
// function divTwoNumbers(a,b) {

//     console.log(a/b);
// }

// addTwoNumbers(10,20);
// subtractTwoNumbers(10,5);
// multiplyTwoNumbers(3,6);
// divTwoNumbers(9,3);

// add = (a,b) => {
//     console.log(a+b);
   
// }
// add(10,50);

// subt = (a,b) => {
//     console.log(a-b);
   
// }
// subt(45,34);
// compare = (a,b) => {
//     d=a+b;
//     if(d>=10){
//         console.log("The no is greaer");

//     }
//     else{
//         console.log("The no is less");

//     }
// }
// compare(5,6);

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
//loop

// print = (numbers)=>{
//     for(var i=0;i<numbers.length;i++){
//         console.log(numbers[i]);

//     }
// }
// print(numbers);

print = (numbers)=>{
    var i=0
    while(i<numbers.length){
        console.log(numbers[i]);
        i++;

    }
}
print(numbers);  

console.log("Do while loop");
print = (numbers)=>{
    var i=0
    do{
        console.log(numbers[i]); 
    }