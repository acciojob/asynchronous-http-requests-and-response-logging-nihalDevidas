//your JS code here. If required.

function getData(index){
	for (var i = 0; i < index.length; i++) {

    var url = index[i];

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            var data = JSON.parse(request.responseText);
            console.log(data);
        }
    }
    request.send();
}
         
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  
];
getData(urls);
