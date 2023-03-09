function geoFindMe() {
  let message = "";

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    localStorage.setItem("coordinates", JSON.stringify({latitude, longitude}))
  };

  const error = () => {
    message = "Voçê deve permitir acessoa sua localização!";
    alert(message);
  };

  if (!navigator.geolocation) {
    message = "Localização não é suportada no seu navegador";
    alert(message)
  } else {
    message = "Localizando...";
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

export { geoFindMe };
