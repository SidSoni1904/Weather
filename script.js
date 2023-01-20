async function getdata() {
  const url = "cityes.json";
  const fetching = await fetch(url);
  const response = await fetching.json();
  console.log(response,"res");
  const cities = response.cities.map((ele) => {
    return ele.City;
  });
//   console.log(cities.toString());

  var select = document.getElementById("select");
  // for (let i = 0; i < cities.length; i++) {
  //   var option = document.createElement("option"),
  //     txt = document.createTextNode(cities[i]);
  //   option.append(txt);
  //   option.setAttribute("value", cities[i]);
  //   select.insertBefore(option, select.lastChild);
  // }

  cities.forEach(element => {
    const option = document.createElement("option")
    option.append(element)
    // console.log(option)
    select.append(option)
  });
 
  // console.log(select)

//   select.addEventListener("change", () => {
//     let a = select.options[select.selectedIndex].value;
//       async function weatherGet() {
//         let citname = a
//       const myurl =
//         "https://api.openweathermap.org/data/2.5/weather?q=" +
//         citname +
//         "&appid=824ddbd631d2951c904188aee6fcaa1c&units=metric";
//       if (citname) {
//         const fetching = await fetch(myurl);
//         const res = await fetching.json();
//         console.log(res);
//       } else {
//           console.log("err")
//       }
//     }
//     weatherGet();
//   });
    
    select.addEventListener("change", () => {
        async function weatherGet() {
          let a = select.value;
 
        const myurl =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          a +
          "&appid=824ddbd631d2951c904188aee6fcaa1c&units=metric";
        if (a) {
          const fetching = await fetch(myurl);
          const res = await fetching.json();
            temperature.innerHTML = Math.round(res.main.temp);
            humidity.innerHTML = res.main.humidity;
            WindDeg.innerHTML = res.wind.deg;
          windSpeed.innerHTML = res.wind.speed;
          Atmosphere.innerHTML = res.weather.map(ele => {
            return ele.description
          });
          longitude.innerHTML = res.coord.lon;
          latitude.innerHTML = res.coord.lat;
          pressure.innerHTML = res.main.pressure;

            console.log(res);
            
        } else {
          console.log("bhai kem nathi maltu");
            }
      }
      weatherGet();
    });
}
getdata();


const day = document.getElementById("day")
let currentDateTime = new Date();
day.innerHTML = currentDateTime