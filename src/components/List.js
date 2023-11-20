import Form from "./Form"
export default function List({ activities }) {
    return (
        
            <ul className="activity-list">
                {activities.map((activity) => (
                    <li key={activity.id} className="activity-list__item">
                        <h3>{activity.name}</h3>
                    </li>
                ))}
               
            </ul>

        



    )


}