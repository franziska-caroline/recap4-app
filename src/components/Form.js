
import List from "./List";
export default function Form({ onAddActivity, isForGoodWeather }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newActivity = {name:event.target.elements.name.value, isForGoodWeather: event.target.elements.isForGoodWeather.checked }
    
    onAddActivity(
      
     newActivity
    );
    event.target.elements.name.focus();
    event.target.reset();
  }

  return (
    <>
      
      <form className="form" onSubmit={handleSubmit}>
        <h2>Activity</h2>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text"></input>
        <label htmlFor="isForGoodWeather">Good-Weather activity</label>
        <input
          id="isForGoodWeather"
          name="isForGoodWeather"
          type="checkbox"
        ></input>
        <button className="form__submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
