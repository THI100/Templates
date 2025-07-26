import userFunction from "../Components/Types/user";
import { useState } from 'react';

export default function UserProfile () {
    const [user, setUser] = useState([]);

    fetch ("localhost:3001/users")
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((user) => {
            setUser ([user])
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
        });

    defUser = userFunction(user.id, user.name, user.photo, user.verified);

    return (
        <section>
            <h2>Your Profile</h2>
            <div>
                <img src={user.photo.src} alt={user.photo.alt} />
                <p>{user.name}</p>
            </div>
            {/* Put more code good luck! */}
        </section>
    )
}