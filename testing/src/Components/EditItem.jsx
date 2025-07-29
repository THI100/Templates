import { useState } from "react";
import ACItem from "./Types/AI";
import ECItem from "./Types/ECI";

export default function EditItem () {

    const [item, setItem] = useState({});
    const type = document.getElementById.value;

    fetch ("localhost:3000/${type}Item")
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((detail) => {
            setItem(detail);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
        });

    if (type == "E-commerce Item") {
        const item = ECItem (item)
    }
    else if (type == "Auction Item") {
        const item = ACItem (item)
    }
    else {
        console.log("Invalid Item type")
        print ("Invalid Item type")
    }

    return (
        <section>
            <div>
                <h2>#{item.id} & {item.name}</h2>
                <form action="">
                    {/* ... Put your own code and etc, i got lazy */}
                </form>
            </div>
        </section>
    );
}