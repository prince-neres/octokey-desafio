function geoFindMe() {
  let message = "";

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    localStorage.setItem("coordinates", JSON.stringify({latitude, longitude}))
  };

  const error = () => {
    message = "Unable to retrieve your location";
    console.log(message);
  };

  if (!navigator.geolocation) {
    message = "Geolocation is not supported by your browser";
    console.log(message)
  } else {
    message = "Locating…";
    console.log(message);
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

export { geoFindMe };
