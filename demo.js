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
console.log(marks); */



