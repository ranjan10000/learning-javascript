function buttonclick(){
    console.log("welcome javascript");
}

function keypress(e){
    if(e.code === "Enter")
    console.log(e.target.value);
}
function eventHandler(e){
    console.log("what is this event?",e.type);
}