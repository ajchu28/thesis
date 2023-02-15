allLayers = ['0am0.json']

fetch("./data/0am0.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
