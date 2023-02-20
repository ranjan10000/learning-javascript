console.log("Hiiii"); //string format
console.error("This is error");
console.warn("This is warning");
console.info("This is just another console.log");
console.trace("this is a trace");

obj ={
    namee : "ranjith",
    age : 20
}
console.log(obj)
console.dir(obj); //object re-format
console.log("Hi %o There",{namee:"ranjith"});
console.log("Hi %d There,2");
console.log("Hi %c there","color:red;background-color: #567")
console.table(["ranjith",20,"chennai"])

console.group(); // grouping the console
console.log("This is a Table");
console.table(["ranjith",20,"chennai"])
console.groupEnd();
console.log("outside group");

function howmany(){
    console.count();
}
howmany();
howmany();
howmany();
howmany();
console.countReset();
howmany();

function howmaay(){
    for(let i=0;i<100000;i++);
}
console.time("howmany");
howmany();
console.timeEnd("howmany");