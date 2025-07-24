import { useState } from "react";

export default function Notification() {
    const [Notifications, setNotifications] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    const fetchNotifications = () => {
        // Toggle visibility
        setShowNotification((prev) => !prev);

        // Only fetch if data is not already loaded
        if (Notifications.length === 0 || showNotification == true) {
            fetch("https://fakestoreapi.com/Notifications")
                .then((res) => {
                    if (!res.ok) throw new Error("Network response was not ok");
                    return res.json();
                })
                .then((data) => {
                    // Assuming each product is a "shipping" here
                    setNotifications(data);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                });
        }
    };

    return (
        <section>
            <h2>Notification</h2> <button onClick={fetchNotifications} />
            
            {Notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                    <h4>{notification.title}</h4>
                    <p>{notification.body}</p>
                </div>
            ))}
        </section>
    );
}