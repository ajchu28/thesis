// Provides functionality to see data about community area on hover
async function getCPM(time, commNum) {
  let response = await fetch("./data/"+time+".json");
  let data = await response.json();

  let value = data.filter(
    function(data) {
      var d = data.pickup_community_area == commNum
      d = Promise.resolve(d)
      d.then((v) => {
        console.log(v[2])
      })
    }
  )

  console.log(value)
}

getCPM("zeroam0", 22);

// map.on('mousemove', (event) => {

// })