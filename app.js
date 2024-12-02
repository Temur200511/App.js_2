// 1)   const a=20;
// const b=40;
// const S=a*b;
// console.log(S);


// 2)  let number1 = +prompt("number1");
// let number2 = +prompt("number2");

// if(number1 != 0 && number2 != 0){

// console.log(number1+number2);


// console.log(number1*number2);

// console.log(number1*number1);
// console.log(number2*number2); 
// }



// 3)  let number1 = +prompt("number1");
// let number2 = +prompt("number2");

// if(number1 != 0 && number2 != 0){
//     console.log((number1+number2)/2);
// }




// 4) let A = +prompt("Sonni kiriting");

// if(A%2==0){
//     console.log("A soni juft");
// }

// else{
//     console.log("A soni toq");
// }


let random = Math.random();
random = Math.floor(random);

if(random%5==0){
    console.log("5ga bo'linadi");
    
}


 else if(random%3==0){
    console.log("3ga bo'linadi");
}

else if(random%3==0 || random%5==0){
    console.log("3 yoki 5ga bo'linadi");
}       

else
{
    console.log("3 yoki 5ga bo'linmaydi");

}