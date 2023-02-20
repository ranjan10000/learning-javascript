//Fetch data from a file? 

document.querySelector('button').addEventListener('click',() =>{

   
    let xhr = new XMLHttpRequest();
    console.log(xhr.readyState);  //0
    xhr.open("GET","sample.txt",true);
    console.log(xhr.readyState);//1

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);//2,3,4
        }

    }
    xhr.send();

    
    xhr.open("GET","user.json",true); //METHOD,URL,BOOLEAN


    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(JSON.parse(xhr.responseText));//2,3,4
        }

    }
    xhr.send();

    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);


    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);//2,3,4
        }

    }
    xhr.send();
});
