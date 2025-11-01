//Assigment 1//

let num=20;
if(num%10==0)
{
console.log("Good");
}
else{
    console.log("Bad");
}

let name=prompt("Enter your Name :");
let age=prompt("Enter your Age");
alert(`${name} is ${age} yeas old`);

let Quarter=2;
switch(Quarter)
{
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;  
    case 3:
        console.log("July,August,September");
        break;    
    case 4:
         console.log("October,November,December");
        break;  
    default:
        console.log("Invalid Quarter!");
        break;    
}

let str="apple";
if((str[0]=="a" && str[0]=="A") && (str.length>3))
{
console.log("Golden");
}
else{
    console.log("Not Golden");
}

let a=10;
let b=5;
let c=15;

if(a>b)
{
    if(a>c)
    {
        console.log(a,"is largest");
    }
    else{
        console.log(c,"is largest");
    }
}
else{
    if(b>c){
        console.log(b,"is largest");
    }
    else{
        console.log(c,"is largest");
    }
}

let num1=32;
let num2=47852;

if((num1%10)==(num2%10))
{
    console.log("Number have same last digit",num1%10);
}
else{
    console.log("Number don't have same last digit");
}

//Todo app//

// let todo=[];

// let  req=prompt("Please enter the request");

// while(true)
//     {
//         if(req=="quit")
//             {
//                 console.log("Quitting app");
//                 break;
//             }
//         if(req=="list")
//             {
//                 console.log("---------------");
//                 for(let i=0;i<todo.length;i++)
//                     {
//                         console.log(i,todo[i]);
//                     }
//                 console.log("---------------");
//             }    
//         else if(req=="add")
//             {
//                 let task=prompt("Enter the task you want to add");
//                 todo.push(task);
//                 console.log("Task added");
//             }   
//         else if(req=="delete")
//             {
//                 let idx=prompt("Enter the index of task to delete");
//                 todo.splice(idx);
//                 console.log("Task deleted");
//             }
//             else{
//                 console.log("Wrong request");
//             }

//         req=prompt("Please enter the request");


//     }

//Assignment 2//

// let arr=[1,2,3,4,5,6,2,3];

// let num=2;


// for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==num)
//             {
//             arr.splice(i,1);
//             }
//     }
//     console.log(arr);


//     let number=287152
//     let count=0;

//     let copy=number;

//     while(copy>0)
//         {
//             count++;
//             copy=Math.floor(copy/10);
//         }
//         console.log(count);

//     let number=287152;
//     let sum=0;

//     let copy=number;

//     while(copy>0)
//         {
//             digit=copy%10;
//             sum+=digit;
//             copy=Math.floor(copy/10);
//         }

//         console.log(sum);


// let num=prompt("Enter the number you want factorial of");

// let fact=1;

// for(let i=1;i<=num;i++)
//     {
//         fact*=i;
//     }
//     console.log(`The factorial of ${num} is ${fact}`);


// let arr=[2,3,4,7,18,22];
// let largest=0;

// for(let i=0;i<arr.length;i++)
//     {
//         if(largest<arr[i])
//             {
//                 largest=arr[i];
//             }
//     }
//     console.log(`The largest number from th array is ${largest}`);

//Creating a post//

// let post={
//     username:"@anurag123",
//     content:"this is #1 post",
//     likes:150,
//     reposts:5,
//     tags:["@sonya9612","@anurag1811"]
    
// };


//Guessing Game//

// const max=prompt("Enter the max number");

// const random=Math.floor(Math.random()*max)+1;

// let guess=prompt("Guess the number");

// while(true)
//     {
//         if(guess=="quit")
//             {
//                 console.log("Quitting game");
//                 break;
//             }
//         if(guess==random)
//             {
//                 console.log(`Congrats,You are right.Your guess number is ${random}`);
//                 break;
//             } 
//            else if(guess<random)
//             {
//                 guess=prompt("Hint: Your guess was to small.Please try again");
//             } 
//             else{
//                 guess=prompt("Hint: Your guess was to large.Please try again");
//             }
//     }

//Assignment 3//

// let dice=Math.floor(Math.random()*6)+1;
// console.log(dice);

// const car={
//     name:"Ferrari",
//     model:2022,
//     color:"Blue"
// };
// console.log(car.name);

// const Person={
//     name:"Steve",
//     age:22,
//     city:"Pune"
// };
// Person.city="New York";
// Person.Country="United States";


//Assignment 4//

// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;

// function getElements(arr,num)
// {
//     for(let i=0;i<arr.length;i++)
//         {
//             if(arr[i]>num)
//                 {
//                     console.log(arr[i]);
//                 }
//         }
// }
// getElements(arr,num);


// let str="abcdabcdefgggh";

// function getUnique(str)
// {
//     let ans="";
//     for(let i=0;i<str.length;i++)
//         {
//             let currChar=str[i];
//             if(ans.indexOf(currChar)==-1)
//                 {
//                     ans+=currChar;
//                 }
//         }
//         return ans;
// }
// getUnique(str);

// let country=["Australia","Germany","Untited states of America"];

// function longestName(country)
// {
//     let ansIdx=0;
//     for(let i=0;i<country.length;i++)
//         {
//             let ansLen=country[ansIdx].length;
//             let currLen=country[i].length;
//             if(currLen>ansLen)
//                 {
//                     ansIdx=i;
//                 }
//         }
//         return country[ansIdx];
// }
// longestName(country);

// let str1="apnacollege";

// function countVowels(str)
// {
//     let count=0;
//     for(let i=0;i<str.length;i++)
//         {
//             if(str.charAt(i)=="a"|| str.charAt(i)=="e"||   str.charAt(i)=="i"|| str.charAt(i)=="o"|| str.charAt(i)=="u")
//                 {
//                     count++;
//                 }
//         }
//         return count;
// }

// let start=100;
// let end=200;

// function generateRandom(start,end)
// {
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
// }

//Assignment 5 //

// const arrayAverage=(arr)=>{
//     let total=0;
//     for(let number of arr)
//      {
//          total+=number;
//      }
//      return total/arr.length;
//  };
 
//  let arr=[1,2,3,4,5,6];
//  console.log(arrayAverage(arr));
 
//  let num=4;
//  const isEven=(num)=>(num%2==0);
 
 
//  const object={
//      message:'Hello, World!',
 
//      logMessage(){
//          console.log(this.message);
//      }
//  };
//  setTimeout(object.logMessage,1000);
 
 
//  let length=4;
//  function callback()
//  {
//      console.log(this.length);
//  }
 
//  const object1={
//      length:5,
//      method(callback){
//          callback();
//      },  
//  };
//  object.method(callback,1,2);


//Assignment 6//

// let num=[1,2,3,4];

// const square=num.map((el)=>el*el);

// console.log(square);

// let sum=0;

// let result=num.reduce((sum,el)=>sum+el);

// console.log(result);

// let avg=result/num.length;

// console.log(`the average of array ${avg}`);


// let arr=[2,4,5,9];

// let newArr=arr.map((el)=>el+5);

// console.log(newArr);

// let arr1=["steve","alan","cillien","thristy"];

// let upper=arr1.map((el)=>el.toUpperCase());

// console.log(upper);

// const doubleAndReturnArgs=(arr,...args)=>[...arr,...args.map((el)=>el*2)];

// console.log(doubleAndReturnArgs([1,2,3],4,6));

// const obj1={
//     a:1,
//     b:2
// };
// const obj2={
//     c:3,
//     d:4
// };

// const mergeObjects={...obj1,...obj2};

// console.log(mergeObjects);


// Practice Question

// let para=document.createElement("p");

// para.innerText="Hey I'm Red!";

// document.querySelector('body').prepend(para);

// para.classList.add("red");


// let h3=document.createElement("h3");

// h3.innerText="I'm a blue h3!";

// document.querySelector('body').prepend(h3);

// h3.style.color="blue";


// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let p2=document.createElement("p2");

// h1.innerText="I'm in a Div";
// p2.innerText="ME TOO";

// div.append(h1);
// div.append(p2);

// div.classList.add("box");

// document.querySelector('body').prepend(div);


// Assignment 7

// let input=document.createElement('input');
// let button=document.createElement('button');

// button.innerText="Click me";

// document.querySelector('body').append(input);
// document.querySelector('body').append(button);

// input.setAttribute("placeholder","username");
// button.setAttribute("id","btn");

// let btn=document.querySelector('#btn');
// btn.classList.add("btnS");

// let h1=document.createElement('h1');
// h1.innerHTML="<u>DOM Practice</u>";

// h1.classList.add("purple");
// document.querySelector('body').append(h1);


// let para=document.createElement('p');
// para.innerHTML="Apna College <b>Delta</b> Practice"

// document.querySelector('body').append(para);


// Assignment 8

// let btn=document.querySelector("button");

// btn.addEventListener("mouseenter",function(){
//     console.log("event occured");
// });


// btn.addEventListener("keypress",function(){
//     console.log("event occured");
// });
// let para=document.querySelector("p");

// para.addEventListener("scroll",function(){
//     console.log("event occured");
// });

// window.addEventListener("load",function(){
//     console.log("event occured");
// });


// let btn1=document.createElement("button");
// document.querySelector("body").append(btn1);

// btn1.addEventListener("click",function(){
//     btn1.style.backgroundColor="green";
// });

// let inp=document.querySelector("input");
// let h2=document.querySelector("h2");


// inp.addEventListener("input",function(){

//     let fvalue=filterInput(inp.value);
//     h2.innerText=fvalue;
// });

// function filterInput(value) {
//     return value.replace(/[^a-zA-Z\s]/g, '');
// }







        


