mapboxgl.accessToken ="pk.eyJ1Ijoic3ViaGFtcHJlZXQiLCJhIjoiY2toY2IwejF1MDdodzJxbWRuZHAweDV6aiJ9.Ys8MP5kVTk5P9V2TDvnuDg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })
  
  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }
  
  function errorLocation() {
    setupMap([-2.24, 53.48])
  }
  
  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/mapbox/streets-v12",
      center: center,
      zoom: 13
    })
  
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
  
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })
  
    map.addControl(directions, "top-left")
  }

  mapboxgl.accessToken = 'pk.eyJ1Ijoic3ViaGFtcHJlZXQiLCJhIjoiY2toY2IwejF1MDdodzJxbWRuZHAweDV6aiJ9.Ys8MP5kVTk5P9V2TDvnuDg';
  const map = new mapboxgl.Map({
      container: "map",
      center: [-74.5, 40],
      zoom: 3,
  });
  
  map.on("load", function () {
      map.addControl(
          new GlobeMinimap({
              landColor: "#4ebf6e",
              waterColor: "#8dcbe3"
          }),
          "bottom-right"
      );
  });