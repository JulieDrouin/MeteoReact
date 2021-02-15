function useTemperature() {
  const REACT_APP_API_KEY = "98b7465353d383f3d0f3bc4a284a48ae";
  return async (c) => {
    const uriEncodedCity = encodeURIComponent(c);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=${REACT_APP_API_KEY}&units=metric`,
      {
        method: "GET",
      }
    );
    if(response.ok) {
        const json = await response.json();
        return json.main.temp;
    }
    return null;
  };
}

export default useTemperature;