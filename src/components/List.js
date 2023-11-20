import Form from "./Form";

export default function List({ activities }) {
  console.log(activities);
  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <li key={activity.id} className="activity-list__item">
          {activity.name}
        </li>
      ))}
    </ul>
  );
}
