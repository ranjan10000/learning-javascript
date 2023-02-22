
// 0 -> unsent
// 1 -> open
// 2 -> Headers_received
// 3 -> loading
// 4 -> done

//404 error -> not found

const url = "https://jsonplaceholder.typicode.com/photos";

const xhr = new XMLHttpRequest();
console.log(xhr.readyState);

xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status ===200){
    console.log(xhr.readyState);
    console.log(xhr);
    console.log(typeof xhr.response);
    const photosArray = JSON.parse(xhr.response);
    console.log(photosArray);
  }
}

xhr.open("GET",url);
xhr.send();