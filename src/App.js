import List from "./components/List/List";
import "./App.css";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [isGoodWeather, setIsGoodWeather] = useState(0);

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/europe"
      );
      const weather = await response.json();
      setIsGoodWeather(weather);
      console.log(weather);
    }
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const filterList = activities.filter((activity) => {
    return activity.isForGoodWeather;
  });
  function handleAddActivity(newActivity) {
    // adds a new animal to the state + passed down to `Form`
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  function handleDeleteActivity(id) {
    setActivities(
      activities.filter((activity) => {
        return activity.id !== id;
      })
    );
  }

  return (
    <main className="App">
      <h1 className="form__header">
        {isGoodWeather.condition} {isGoodWeather.temperature}°C
      </h1>
      <List
        onDeleteActivity={handleDeleteActivity}
        activities={activities}
        filterList={filterList}
        isGoodWeather={isGoodWeather}
      ></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </main>
  );
}

export default App;
