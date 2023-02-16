/*    //var vs global

//var - function scope(access within the function)

function demo()
{
    var name = 'ranjith kumar';

    console.log(name);
} demo();

//without variable declaration consider as global
// we can access the variable out of the function

function demo()
{
     myname = 'ranjith kumar';

    console.log(myname);
} demo();
    console.log(myname);

    //let -- block scope
    //we can access the variable within the function  

    function demo()
    {
      if(true)
        {
          var grade ='A';
          let garde1 ='A';
        }
        
console.log(grade);
console.log(grade1);
    }demo();   

    // const -- variable(we can't change the value)

    function demo()
    {
        if(true){
            const grade = 'A';
            grade = 'B';
            console.log(grade);

        }
    }demo();  


    //operators
    //Arithmatic operators
    //+,-,*,/,%,++,--,**

    console.log(20+20);
    console.log(20-20);
    console.log(20*20);
    console.log(20/20);
    console.log(20%20);
    
    let a= 20;
    console.log(++a); //pre increment
    console.log(a); 
    console.log(a++);  //post increment
    console.log(a);
    console.log(2**3); //2*2*2   

    //Assignment operator
    // += , -= ,**= ,*=
    let a = 20;
    a += 2; //a=a+2
    a **=2; //a=a**2;

    //comparison operators
    //== ,>= ,<= ,=== ,!=   

    var mark = 90;

    if(mark >= 80) {
    grade = 'A';
    console.log(grade);
}   

//logical operators
// && , 
    
var mark = 90;

if(mark >= 80 && mark <=90)  {
grade = 'A';
console.log(grade);
}     

// program execution flow 

//1.Sequence -- line by line execution
//2.Selection -- conditionally working statement(ex : if,switch)
//3.Repition -- same line of code execute again and again(ex : loops)

//2.selection
//condition statement(if,else,else if)  

function getGrade(marks){
    let grade;
if(marks > 95){
console.log('you are pass');
}else if(marks > 85){
console.log('you are just pass')
}else{
    console.log('you are fail')
}

    return grade;
}getGrade(87);           

//switch statement

function calculate(operator){
    switch(operator){
        case "+" : console.log(20+20); break;
        case "-" : console.log(20-20); break;
        default : console.log("unknown operation"); break;
    }

}calculate("+"); 

//3.Repition
//for loop

for(let i=1;i<=10;i++){
    console.log(i);
}

//while loop

let i = 1;
while(i<=10){
console.log(i);
i++;
}  
 
// dowhile loop

let i =11;
do{
    console.log(i);
    i++;
}while(i<=11);   

//condition operator

let marks = 65;

let grade = marks > 45 ? "pass" : "fail" ;

console.log(grade);  

//function,arguments,return

function function_name(arguments){
    //code
    return ;
}

//example code for -- function,arguments,return

function getResult(marks){
    let result;
    if(marks>45){
        result="pass";
    }else{
        result="fail";
    }
    return result;
}
let result = getResult(50);
console.log(result);  

//function expression vs function declaration
//function declaration
function func(){
    return "hello";
}

//function expression  
// we can store the function in variable,we can pass the function as argument,function to function return
//without function name is called as anonymous function   

let func = function(){
    console.log("hello");
}
func();   

//fat arrow functions

let sayHello = function(){
    console.log("hello");
}

let fatSayHello = () => {
    console.log("hello");
}  

//object -- key value pair -- properties and methods

let ranjith ={
    name:"ranjith kumar",
    age:21,

    startExam: function(){
        console.log("you can start the exam");
    }
}

console.log(ranjith);
console.log(ranjith.age);
console.log(ranjith["name"]);  

//Array

let names =["ranjith","kumar","murugan"]; //array declaration
names[1]="kumar2"; //modification
console.log(names[1]);

let names2 = new Array();

names2[0]="facebook";

names[5]="youtube";

console.log(names2);  

//Array Methods (Push, Pop, Splice, join, indexof)

//array -- push -- add element
games = ['cricket','football']

let numofgames = games.push('kabaddi');

console.log(games);
console.log(numofgames);

//array -- pop -- remove element

games.pop();
console.log(games)

//array -- splice -- remove inbetween element

games.splice(0,1);//(index,no of element remove from index)
console.log(games);  

//array -- join -- convert array to string

let names =["ranjith","kumar","murugan"]; 

names.join(' ');
console.log(names)

//array -- indexof -- find the index

console.log(names.indexOf("ranjith"));

//array -- fill -- used to fill the same element in emety array

names.fill('0');
console.log(names);

//array -- delete -- delete is used to delete the values but not the memory. so we can use splice and pop these are used to remove values also memory 

//------

//Map, Filter, Reduce

//map -- one array convert into another array

const marks =[35,45,55,65,75];

// e -- each element execute in this code
const grade = marks.map(function(e){
    let result = e>=35 ? "pass" : "fail";
    return result;
    console.log(e);
})
console.log(grade);
//--(or)--  
const marks =[35,45,55,65,75];
const grade = marks.map(function(e){
    return e>=35 ? "pass" : "fail";
    console.log(e);
})
console.log(grade);
//--(or)--  
const marks =[35,45,55,65,75];
const grade = marks.map(e => e>=35 ? "pass" : "fail");

console.log(grade);  

// filter -- filter the condition

const marks =[35,45,55,65,75];
const pass = marks.filter(e => e>= 45)
console.log(pass);
console.log(marks); 

//reduce -- it is used for abbreviate the function

const marks = [10,20,30,40,50];

const sum = marks.reduce((acc,e) =>{
return acc + e;
},0);
console.log(sum)   

//--(or)--

const marks = [10,20,30,40,50];
const sum = marks.reduce((acc,e)=> acc+e,0);
console.log(sum);

//--Rest and spread operator in array
//Spread
let avengers = ['iron man','captain america','thor'];
let updatedAvenger = [...avengers,'hulk'];
let updatedAvenger1 =['hulk',...avengers];
console.log(updatedAvenger1)
console.log(updatedAvenger);
//Rest
let [hulk,iron,...rest] = updatedAvenger;
console.log(updatedAvenger);
console.log(iron)
console.log(hulk)
console.log(rest)

//--Rest and spread operator in object  
//spread
let obj ={
    name:'ranjith kumar',
    age : 24
}

obj1 ={
    ...obj,
    work : 'software engineer'
}

console.log(obj1);

//Rest
let {work,age,...dummy}=obj1;
console.log(dummy);   

//foreach,for in ,for of loops
//foreach loop -- only for array
avengers=['iron man','captain america'];

avengers.forEach((element) => console.log(element))
//foreach loop also print index values
avengers.forEach((element,i) => console.log(element,i)) 

//for in loop  for object--

//print only key value
obj = {name:'ranjith kumar',age:24}
for(let x in obj){
    console.log(x);
}

//print only pair value
for(let x in obj){
    console.log(obj[x]);
}

//for in loop for array -- print index value
let avengers = ['iron man','captain america','thor'];

for(let x in avengers){
    console.log(x);
}

// for of loop -- for of loop works only who have sympol.property file
for(let i of avengers){
    console.log(i);
}

//Passing by value vs Passing by reference
//passing by value -- passing only values not memory address so we can't change the original values
function updateValue(a){
a++;
}
let x=10;
console.log(x);
updateValue(x);
console.log(x);  

//Passing by reference -- we can change the original values because passing memory address,it affected the original value
function updateValue(a){
    a.age=24;
    }
    
    obj = {
        name:'ranjith kumar',
        age : 20
    }
    
    console.log(obj);
    updateValue(obj);
    console.log(obj);

    
//String functions (split, concat, trim, etc)
a='hello'
console.log(a.length);

//string -- concat -- it support variable length argument(it means this is support n number of argument)
a = "welcome";
a.concat("hiii");
console.log(a);
a.concat("hiiii","hello");
console.log(a);
a.concat("hiiii","hello","welcome");

//string -- charAt -- find the index of charactor
 a="hello world";
 b= a.charAt(7);
 console.log(b);

 //string -- split -- split the word (or) charactor
//split -- word by word
a = "all are welcome"
b = a.split(' ');
console.log(b);

//split -- charactor by charactor
a = "all are welcome"
c = a.split(''); //without space
console.log(c);

//string -- touppercase,tolowercase
a = "hello world";
b = a.toUpperCase();
console.log(b);
c = a.toLowerCase();
console.log(c); 

//string -- trim -- trim front and back space 
a ="           hello world          ";
b = a.trim()
console.log(b);

//string -- replace -- replace the word or charactor

a ="hello world";
b = a.replace("hello","hii");
console.log(b);  

//string -- replace -- this is used for replace the word ,this word is either uppercase or lowercase(ignore case)
a = "HeLLo world";
b = a.replace(/hello/i,"hiii"); // i means ignore case
console.log(b);

//string -- substring -- particularly split and get the word

a ="hello word";
b = a.substr(5);//from
c = a.substr(5,4)//from,length
console.log(b);
console.log(c); 

//string -- indexof -- find the word index value

a ="hello word word";
b = a.indexOf("word")//searchstring
c = a.indexOf("word" ,10);//searchstring,position
d =a.lastIndexOf("word");
console.log(b);
console.log(c);
console.log(d);


//Template String and String Interpolation 
let namee = 'ranjith kumar';
let place = 'karaikudi';

console.log("name :" + namee);
console.log("place :" + place); // to print this format is very defficult. so , we have to template string

//template String -- which format you declare that format we can easily print
let text = `name : <name>
place : <place>`; //``--backtick
console.log(text); 

//String Interpolation -- we can easily write js code on template string
let namee = "ranjith kumar";
let place = "chennai";

let text =`
name : ${namee}
place :${place}
`;
console.log(text);
*/

//Regular Expression -- pattern and flags

"hello world".replace(/hello/igm,"hi"); // i -- ignorecase,g-global,m-multiline
//a = 'welcome'; -- /welcome/igm
//a = 'welcome weldome' -- /wel[cd]ome/igm -- either c or d 
//a ='welcome weleome wel9ome' -- /wel[a-zA-Z0-9]ome/igm -- inbetween a-z,A-Z
// a ='wel9ome' -- /wel[/d]ome/igm --/d means digit -- we can identity the numbers easily
// / /s /ig -- /s -- space
// a= 'welcome welcoome welcoooome welcme' -- / welco+me/ig / -- one or more
// a= 'welcome welcoome welcoooome welcme' -- / welco*me/ig / -- zero or more
// a= 'welcome welcoome welcoooome welcme' -- / welco?me/ig / -- zero or one
// a= 'welcome welcoome welcoooome welcme' -- / welco{2,3}me/ig / -- minimun to maximum 
// a= 'welcome welcoome welcoooome welcme' -- / welco.me/ig / -- any charactor in dot
// a= 'welcome welcoome welcoooome welcme' -- / $me/ig / -- find the ending




