import user from "../Components/Types/user";
import { useState } from "react";


export default function UserPortifolio () {
    const [user, setUser] = useState ([])

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

    return(
        <section>
            <div>
                <img src={user.photo.src} alt={user.photo.alt} />
                <p>{user.photo.alt}</p>
                <h2>{user.nick}</h2>
            </div>
            {/*Put the rest of the code*/}
        </section>
    );
}

export default function PersonalPortfolio () {
    return(
        <section>
            <div>
                <img src="" alt="" />
                <h2></h2>
            </div>
            {/*Put the rest of the code*/}
        </section>
    );
}