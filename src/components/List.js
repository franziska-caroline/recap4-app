import Form from "./Form";

export default function List({ filterList, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      {isGoodWeather ? (
        <h1>The weather is awesome! Here is what you can do now:</h1>
      ) : (
        <h1>Bad weather outside! Here is what you can do now:</h1>
      )}
      <ul className="activity-list">
        {filterList.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
