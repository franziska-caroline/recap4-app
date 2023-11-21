import Form from "./Form";

export default function List({ activities, filterList, isGoodWeather }) {
  return (
    <>
      {isGoodWeather ? (
        <h1>The Weather is awesome! Here is what you can do now:</h1>
      ) : (
        <h1>Bad Weather outside! Here is what you can do now:</h1>
      )}
      <ul className="activity-list">
        {filterList.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            {activity.name}
          </li>
        ))}
      </ul>
    </>
  );
}
