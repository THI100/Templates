import { useState } from "react";

export default function Auctions () {
    const [getECommerceItem, setGetECommerceItem] = useState ([])

    for (i=0; i==24; i++) {
        fetch("localhost:3000/ECommerceItems")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((auctionsItems) => {
                setUser (setGetEcommerceItem)
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });

        let auctionItem = [getECommerceItem];
    }

    const itemEC= (auctionItem.id, auctionItem.description, auctionItem.name, auctionItem.price, auctionItem.photo) => {
        return (
            id,
            description,
            title,
            price,
            photo
        )
    }

    return (
        <section>
            {itemAuction.map (() => (
                <div id={itemEC.id} className="itemEC">
                    <h2>{itemEC.title} $ {itemEC.price}</h2>
                    <img src={itemEC.photo.src} alt={itemEC.photo.alt} />
                    <p>{itemEC.description}</p>
                </div>
            ))}
        </section>
    )

    
}