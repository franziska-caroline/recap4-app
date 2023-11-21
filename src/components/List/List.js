import "./List.css";

export default function List({ filterList, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      {isGoodWeather ? (
        <h2 className="weather__good">
          The weather is awesome! Here is what you can do now:
        </h2>
      ) : (
        <h2 className="weather__bad">
          Bad weather outside! Here is what you can do now:
        </h2>
      )}
      <ul className="activity-list">
        {filterList.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            {activity.name}
            <button
              className="activity-list__delete-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
