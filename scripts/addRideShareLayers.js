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

test = ["twelvepm0.json"]

// To recalculate, run jenkinsCalc.py — update allLayers if necessary
breaks = [0.6063146196, 0.817689276, 0.9497102819, 1.114741225, 1.366572812, 1.995743373]
choroplethColors = ["rgb(255,255,204)", "rgb(199,233,180)", "rgb(127,205,187)", "rgb(65,182,196)", "rgb(44,127,184)", "rgb(37,52,148)"]

async function makeLayers(input) {

  for (let i = 0; i < input.length; i++) {

    let name = input[i].split(".")[0];
    let response = await fetch("./data/"+input[i]);
    let data = await response.json();
    
    const matchExpression = ['match', ['get', 'area_num_1']];

    for (const row of data) {
      const matchVal = row['cost_per_min'];
      
      var closestBreak = breaks.reduce(function(prev, curr) {
        return (Math.abs(curr - matchVal) < Math.abs(prev - matchVal) ? curr : prev);
      }); 
    
      matchExpression.push(row['pickup_community_area'], choroplethColors[breaks.indexOf(closestBreak)]);
    }

    matchExpression.push('rgba(0, 0, 0, 0)');

    map.addLayer(
      {
        'id': name,
        'type': 'fill',
        'source': 'neighborhoods',
        'source-layer': 'Boundaries_-_Community_Areas_-buz6at',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': matchExpression,
          'fill-opacity': 0.9,
        }
      }
    );

    map.moveLayer(
      name,
      'placeholder'
    );
  }
}

map.on('load', () => {

  // Neighborhood boundaries layer
  map.addSource('neighborhoods', {
    type: 'vector',
    url: 'mapbox://ajchu28.38hlra0j'
  });

  makeLayers(allLayers)
  
});

// map.on('idle', () => {
//   map.setLayoutProperty('twelvepm0', 'visibility', 'visible');
// })
