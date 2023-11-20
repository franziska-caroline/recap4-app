export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddActivity(
      event.target.elements.name.value,
      event.target.elements.isForGoodWeather.checked
    );
    event.target.elements.name.focus();
    event.target.reset();
  }

  return (
    <>
      <h1 className="form__header">Weather App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Activity</h2>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text"></input>
        <label htmlFor="isForGoodWeather">Good-Weather Activity</label>
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
