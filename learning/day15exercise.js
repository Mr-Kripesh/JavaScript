// let hour = 17 ;
// const name = 'Kripesh Raj Panta';
// if (hour >= 6 && hour<=12){
//     console.log(`Good Morning ${name}`);
// }
// else if(hour >= 13 && hour <=17){
//     console.log(`Good Afternoon ${name}`);
// }
// else{
//     console.log(`Good Night ${name}`);
// }

let age = (Math.floor(Math.random()*100)+1);
let day = (Math.floor(Math.random()*7)+1);
let result = '';
 if ((age <= 6 || age >= 65) && day != 1 && day != 7){
    console.log('You are qualified for getting discount.');
    console.log(age);
    console.log(day);
    
 }
 else{
    console.log(age);
    console.log(day);
    console.log("Sorry! You are not eligible to get the discount");
result = input("Enter the day")
 }











//node learning/day15exercise.js