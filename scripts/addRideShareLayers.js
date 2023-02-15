allLayers = [
'zeroam0.json', 'zeroam15.json', 'zeroam30.json', 'zeroam45.json',
'oneam0.json', 'oneam15.json', 'oneam30.json', 'oneam45.json',
'twoam0.json', 'twoam15.json', 'twoam30.json', 'twoam45.json',
'threeam0.json', 'threeam15.json', 'threeam30.json', 'threeam45.json',
'fouram0.json', 'fouram15.json', 'fouram30.json', 'fouram45.json',
'fiveam0.json', 'fiveam15.json', 'fiveam30.json', 'fiveam45.json',
'sixam0.json', 'sixam15.json', 'sixam30.json', 'sixam45.json',
'sevenam0.json', 'sevenam15.json', 'sevenam30.json', 'sevenam45.json',
'eightam0.json', 'eightam15.json', 'eightam30.json', 'eightam45.json',
'nineam0.json', 'nineam15.json', 'nineam30.json', 'nineam45.json',
'tenam0.json', 'tenam15.json', 'tenam30.json', 'tenam45.json',
'elevenam0.json', 'elevenam15.json', 'elevenam30.json', 'elevenam45.json',
'twelvepm0.json', 'twelvepm15.json', 'twelvepm30.json', 'twelvepm45.json',
'thirteenpm0.json', 'thirteenpm15.json', 'thirteenpm30.json', 'thirteenpm45.json',
'fourteenpm0.json', 'fourteenpm15.json', 'fourteenpm30.json', 'fourteenpm45.json',
'fifteenpm0.json', 'fifteenpm15.json', 'fifteenpm30.json', 'fifteenpm45.json',
'sixteenpm0.json', 'sixteenpm15.json', 'sixteenpm30.json', 'sixteenpm45.json',
'seventeenpm0.json', 'seventeenpm15.json', 'seventeenpm30.json', 'seventeenpm45.json',
'eighteenpm0.json', 'eighteenpm15.json', 'eighteenpm30.json', 'eighteenpm45.json',
'nineteenpm0.json', 'nineteenpm15.json', 'nineteenpm30.json', 'nineteenpm45.json',
'twentypm0.json', 'twentypm15.json', 'twentypm30.json', 'twentypm45.json',
'twentyonepm0.json', 'twentyonepm15.json', 'twentyonepm30.json', 'twentyonepm45.json',
'twentytwopm0.json', 'twentytwopm15.json', 'twentytwopm30.json', 'twentytwopm45.json',
'twentythreepm0.json', 'twentythreepm15.json', 'twentythreepm30.json', 'twentythreepm45.json'
]

for (let i = 0; i < 96; i++) {
  var name = allLayers[i].split(".")[0];
  fetch("./data/"+allLayers[i])
  .then(response => {
    return response.json();
  })
  .then(name => console.log(name));
}

console.log(twentypm0);
