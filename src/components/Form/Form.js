import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newActivity = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
    };

    onAddActivity(newActivity);
    event.target.elements.name.focus();
    event.target.reset();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h3>New activity</h3>
        <div className="form__activity-input">
          {" "}
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text"></input>
        </div>
        <div className="form__goodweather-checkbox">
          {" "}
          <label htmlFor="isForGoodWeather">Good-Weather activity</label>
          <input
            id="isForGoodWeather"
            name="isForGoodWeather"
            type="checkbox"
          ></input>
        </div>
        <button className="form__submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
