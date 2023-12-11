//your JS code here. If required.

function getData(urls){
	const request = new XMLHttpRequest();
	for(let url of urls){

		 request.open('GET',`${url}`);
         request.send();
        
        // to get the response that is sent
        request.addEventListener('load',function(){
         const data = JSON.parse(this.responseText);
			console.log(data)
		})
	}
         
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];
getData(urls);
