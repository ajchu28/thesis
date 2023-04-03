var currCPM = 0;
var average = 0

// Provides functionality to see data about community area on hover
async function getCPM(time, commNum) {
  let response = await fetch("./data/"+time+".json");
  let data = await response.json();

  let value = data.filter(
    function(data) {
      return d = data.pickup_community_area == commNum
    }
  )
  
  var running_average = 0
  for (const row of data) {
    running_average += parseFloat(row['cost_per_min']);
  }

  average = running_average/96

  let cpm =  Object.values(value[0])[3]
  currCPM = cpm
}

map.on('mousemove', (event) => {
  let layer_mapping = {
    1: "zeroam0", 2: "zeroam15", 3: "zeroam30", 4: "zeroam45", 5: "oneam0", 6: "oneam15", 7: "oneam30", 8: "oneam45", 9: "twoam0",
    10: "twoam15", 11: "twoam30", 12: "twoam45", 13: "threeam0", 14: "threeam15", 15: "threeam30", 16: "threeam45", 17: "fouram0",
    18: "fouram15", 19: "fouram30", 20: "fouram45", 21: "fiveam0", 22: "fiveam15", 23: "fiveam30", 24: "fiveam45", 25: "sixam0",
    26: "sixam15", 27: "sixam30", 28: "sixam45", 29: "sevenam0", 30: "sevenam15", 31: "sevenam30", 32: "sevenam45", 33: 'eightam0', 
    34: 'eightam15', 35: 'eightam30', 36: 'eightam45', 37: 'nineam0', 38: 'nineam15', 
    39: 'nineam30', 40: 'nineam45', 41: 'tenam0', 42: 'tenam15', 43: 'tenam30', 44: 'tenam45',
    45: 'elevenam0', 46: 'elevenam15', 47: 'elevenam30', 48: 'elevenam45', 49: 'twelvepm0', 
    50: 'twelvepm15', 51: 'twelvepm30', 52: 'twelvepm45', 53: 'thirteenpm0', 54: 'thirteenpm15', 
    55: 'thirteenpm30', 56: 'thirteenpm45', 57: 'fourteenpm0', 58: 'fourteenpm15', 59: 'fourteenpm30', 
    60: 'fourteenpm45', 61: 'fifteenpm0', 62: 'fifteenpm15', 63: 'fifteenpm30', 64: 'fifteenpm45', 
    65: 'sixteenpm0', 66: 'sixteenpm15', 67: 'sixteenpm30', 68: 'sixteenpm45', 69: 'seventeenpm0', 
    70: 'seventeenpm15', 71: 'seventeenpm30', 72: 'seventeenpm45', 73: 'eighteenpm0', 74: 'eighteenpm15', 
    75: 'eighteenpm30', 76: 'eighteenpm45', 77: 'nineteenpm0', 78: 'nineteenpm15', 79: 'nineteenpm30',
    80: 'nineteenpm45', 81: 'twentypm0', 82: 'twentypm15', 83: 'twentypm30', 84: 'twentypm45',
    85: 'twentyonepm0', 86: 'twentyonepm15', 87: 'twentyonepm30', 88: 'twentyonepm45', 89: 'twentytwopm0', 
    90: 'twentytwopm15', 91: 'twentytwopm30', 92: 'twentytwopm45', 93: 'twentythreepm0', 94: 'twentythreepm15', 
    95: 'twentythreepm30', 96: 'twentythreepm45'
  }

  let neighborhood_mapping = {
    1: 'Rogers Park', 2: 'West Ridge', 3: 'Uptown', 4: 'Lincoln Square', 5: 'North Center', 
    6: 'Lake View', 7: 'Lincoln Park', 8: 'Near North Side', 9: 'Edison Park', 10: 'Norwood Park', 
    11: 'Jefferson Park', 12: 'Forest Glen', 13: 'North Park', 14: 'Albany Park', 15: 'Portage Park', 
    16: 'Irving Park', 17: 'Dunning', 18: 'Montclare', 19: 'Belmont Cragin', 20: 'Hermosa', 21: 'Avondale', 
    22: 'Logan Square', 23: 'Humboldt Park', 24: 'West Town', 25: 'Austin', 26: 'West Garfield Park', 
    27: 'East Garfield Park', 28: 'Near West Side', 29: 'North Lawndale', 30: 'South Lawndale', 
    31: 'Lower West Side', 32: 'Loop', 33: 'Near South Side', 34: 'Armour Square', 35: 'Douglas', 
    36: 'Oakland', 37: 'Fuller Park', 38: 'Grand Boulevard', 39: 'Kenwood', 40: 'Washington Park', 
    41: 'Hyde Park', 42: 'Woodlawn', 43: 'South Shore', 44: 'Chatham', 45: 'Avalon Park', 46: 'South Chicago', 
    47: 'Burnside', 48: 'Calumet Heights', 49: 'Roseland', 50: 'Pullman', 51: 'South Deering', 52: 'East Side', 
    53: 'West Pullman', 54: 'Riverdale', 55: 'Hegewisch', 56: 'Garfield Ridge', 57: 'Archer Heights', 
    58: 'Brighton Park', 59: 'Mckinley Park', 60: 'Bridgeport', 61: 'New City', 62: 'West Elsdon', 63: 'Gage Park', 
    64: 'Clearing', 65: 'West Lawn', 66: 'Chicago Lawn', 67: 'West Englewood', 68: 'Englewood', 
    69: 'Greater Grand Crossing', 70: 'Ashburn', 71: 'Auburn Gresham', 72: 'Beverly', 73: 'Washington Heights', 
    74: 'Mount Greenwood', 75: 'Morgan Park', 76: 'Ohare', 77: 'Edgewater'
  }

  let output = document.getElementById("slider_input").value;
  let active_layer = layer_mapping[output]

  let cpm_update = document.getElementById("hover_cpm")
  let neighborhood_update = document.getElementById("neighborhood_cpm")
  let average_update = document.getElementById("neighborhood_cpm")
  var time_of_day = document.getElementById("time_of_day").innerHTML;

  if (!map.getLayer('boundaries-community-areas')) {
    console.log("aborting");
  } else {
    const boundaries = map.queryRenderedFeatures(event.point, {
      layers: ['boundaries-community-areas']
    });
    
    value = boundaries[0]
  
    if (value == undefined) {
      console.log("Undefined region")
    } else {
      area_num = boundaries[0].properties['area_num_1']
      // console.log(neighborhood_mapping[area_num])
      getCPM(active_layer, area_num)
      // console.log(average)
      average_diff = Math.abs(currCPM, average)
      var difference = "above"
      if (currCPM <= average) {
        difference = "below"
      }
      // console.log(average_diff)
      currCPM = (Math.round(currCPM*100))/100
      cpm_update.innerHTML = "$".concat(String(currCPM)).concat(" per minute")
      neighborhood_update.innerHTML = neighborhood_mapping[area_num]
      average_update.innerHTML = "$".concat((Math.round(average_diff*100))/100).concat(" %d average at %s", difference, time_of_day)
      // console.log(currCPM)
      // console.log(area_num)
    }
  }
  
})