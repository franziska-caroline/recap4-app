import List  from "./components/List";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activity, setActivity] = useState("");

  function handleAddActivity(newActivity) {
    // adds a new animal to the state + passed down to `Form`
    setActivity([...activity, { id: uid(), ...newActivity }]);
  }

  return (
    <div className="App">
     <h1 className="form__header">Weather App</h1>
     <List activities={activity}/>
      <Form onAddActivity={handleAddActivity} />

    </div>
  );
}

export default App;
