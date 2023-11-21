import List from "./components/List";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  const filterList = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  function handleAddActivity(newActivity) {
    // adds a new animal to the state + passed down to `Form`
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(newActivity);
  }
  console.log(activities);
  return (
    <div className="App">
      <h1 className="form__header">Weather App</h1>
      <List
        activities={activities}
        filterList={filterList}
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
