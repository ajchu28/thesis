// let time_mapping = {
//   1: ["12:00 AM", "zeroam0"],
//   2: ["12:15 AM", "zeroam15"],
//   3: ["12:30 AM", "zeroam30"],
//   4: ["12:45 AM", "zeroam45"],
//   5: ["1:00 AM", "oneam0"],
//   6: ["1:15 AM", "oneam15"],
//   7: ["1:30 AM", "oneam30"],
//   8: ["1:45 AM", "oneam45"],
//   9: ["2:00 AM", "twoam0"],
//   10: ["2:15 AM", "twoam15"],
//   11: ["2:30 AM", "twoam30"],
//   12: ["2:45 AM", "twoam45"],
//   13: ["3:00 AM", "threeam0"],
//   14: ["3:15 AM", "threeam15"],
//   15: ["3:30 AM", "threeam30"],
//   16: ["3:45 AM", "threeam45"],
//   17: ["4:00 AM", "fouram0"],
//   18: ["4:15 AM", "fouram15"],
//   19: ["4:30 AM", "fouram30"],
//   20: ["4:45 AM", "fouram45"],
//   21: ["5:00 AM", "fiveam0"],
//   22: ["5:15 AM", "fiveam15"],
//   23: ["5:30 AM", "fiveam30"],
//   24: ["5:45 AM", "fiveam45"],
//   25: ["6:00 AM", "sixam0"],
//   26: ["6:15 AM", "sixam15"],
//   27: ["6:30 AM", "sixam30"],
//   28: ["6:45 AM", "sixam45"],
//   29: ["7:00 AM", "sevemam0"],
//   30: ["7:15 AM", "sevenam15"],
//   31: ["7:30 AM", "sevenam30"],
//   32: ["7:45 AM", "sevenam45"],
// }

let time_mapping = {
  1: "12:00 AM", 2: "12:15 AM", 3: "12:30 AM", 4: "12:45 AM",
  5: "1:00 AM", 6: "1:15 AM", 7: "1:30 AM", 8: "1:45 AM",
  9: "2:00 AM", 10: "2:15 AM", 11: "2:30 AM", 12: "2:45 AM",
  13: "3:00 AM", 14: "3:15 AM", 15: "3:30 AM", 16: "3:45 AM",
  17: "4:00 AM", 18: "4:15 AM", 19: "4:30 AM", 20: "4:45 AM",
  21: "5:00 AM", 22: "5:15 AM", 23: "5:30 AM", 24: "5:45 AM",
  25: "6:00 AM", 26: "6:15 AM", 27: "6:30 AM", 28: "6:45 AM",
  29: "7:00 AM", 30: "7:15 AM", 31: "7:30 AM", 32: "7:45 AM",
  33: "8:00 AM", 34: "8:15 AM", 35: "8:30 AM", 36: "8:45 AM",
  37: "9:00 AM", 38: "9:15 AM", 39: "9:30 AM", 40: "9:45 AM",
  41: "10:00 AM", 42: "10:15 AM", 43: "10:30 AM", 44: "10:45 AM",
  45: "11:00 AM", 46: "11:15 AM", 47: "11:30 AM", 48: "11:45 AM",
  49: "12:00 PM", 50: "12:15 PM", 51: "12:30 PM", 52: "12:45 PM",
  53: "1:00 PM", 54: "1:15 PM", 55: "1:30 PM", 56: "1:45 PM",
  57: "2:00 PM", 58: "2:15 PM", 59: "2:30 PM", 60: "2:45 PPM",
  61: "3:00 PM", 62: "3:15 PM", 63: "3:30 PM", 64: "3:45 PM",
  65: "4:00 PM", 66: "4:15 PM", 67: "4:30 PM", 68: "4:45 PM",
  69: "5:00 PM", 70: "5:15 PM", 71: "5:30 PM", 72: "5:45 PM",
  73: "6:00 PM", 74: "6:15 PM", 75: "6:30 PM", 76: "6:45 PM",
  77: "7:00 PM", 78: "7:15 PM", 79: "7:30 PM", 80: "7:45 PM",
  81: "8:00 PM", 82: "8:15 PM", 83: "8:30 PM", 84: "8:45 PM",
  85: "9:00 PM", 86: "9:15 PM", 87: "9:30 PM", 88: "9:45 PM",
  89: "10:00 PM", 90: "10:15 PM", 91: "10:30 PM", 92: "10:45 PM",
  93: "11:00 PM", 94: "11:15 PM", 95: "11:30 PM", 96: "11:45 PM"
}

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

var slider = document.getElementById("slider_input");
var output = document.getElementById("time_of_day");
output.innerHTML = slider.value; // Display the default slider value
var prev_time = slider.value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  if (this.value in time_mapping) {
    console.log(prev_time);
    let prevLayer = layer_mapping[prev_time];
    console.log(prevLayer);
    let currLayer = layer_mapping[this.value];
    map.setLayoutProperty(currLayer, 'visibility', 'visible');
    output.innerHTML = time_mapping[this.value];
    map.setLayoutProperty(prevLayer, 'visibility', 'none');
  } else {
    console.log("layer not changing")
    output.innerHTML = this.value;
    prevLayer = layer_mapping[0]
  }
  prev_time = slider.value
}

// map.on('idle', () => {
//   map.setLayoutProperty('twelvepm0', 'visibility', 'visible');
// })
