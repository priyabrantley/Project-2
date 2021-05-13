
window.addEventListener('load', (event) => {  
  
  console.log('page is fully loaded');
  // write code here

 let counter = 0;
 document.getElementById('search designs').addEventListener('click', () => {

 console.log('this only prints out when the button is clicked'); 
 counter = counter +1;
 console.log('the value of the variable is', counter);

 document.getElementById('result').innerText = counter;

let search = document.getElementsByClassName("input-search")[0].value;
console.log('2')
console.log(search);
 
  fetch('https://api.giphy.com/v1/gifs/search?api_key=F11H7iZGRRbFZttKklBj7F3Pi44BETpf&q=' + search + '&limit=25&offset=0&rating=g&lang=en')
            .then(response => response.json())
            .then(data => {
              
            for (i = 0; i < data.data.length; i++) {
                    console.log(data.data[i].images.downsized_large.url)
                    document.getElementById('gifs').innerHTML +=("<img src=" + data.data[i].images.downsized_large.url + ">");
                }  
            }
           
              );
});
}); 






