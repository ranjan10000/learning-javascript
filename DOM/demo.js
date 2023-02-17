/*
DOM - Getter Methods
document.getElementById("myid") 
document.getElementById("myid").id
document.getElementById("myid").classList
document.getElementsByClassName("myclass") //list all matched class
document.getElementsByTagName("div") //list all matched tags
document.querySelector("div") // first matched div tag
document.querySelectorAll("div") //list all the div tags
document.querySelector("#myid") 
document.querySelector(".myclass")//only select one paragragh in myclass class
document.querySelector("p.myclass")//this is used for select all the paragragh in myclass class

DOM - Attributes
setAttribute(name,value)
getAttribute(name)
hasAttribute //check the attribute

DOM - Styles and Classes  

//we can access the css property using style 
para = document.querySelector('p')
para.style.color="red";
//we add add css class using js
para = document.querySelector('p')
para.classList.add("red", "console") // add css class
para.classList.remove("red"); //remove css class
para.classList // find the css class

*/
//DOM - Event Listening
document.getElementById('p1').addEventListener('click',function(e) {
    console.log(e.target.innerText);
})






