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
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
