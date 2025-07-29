import { useState } from "react";

export default function Auctions () {
    const [getAuctionItem, setGetAuctionItem] = useState ([])

    for (i=0; i==24; i++) {
        fetch("localhost:3000/auctions")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((auctionsItems) => {
                setUser (setGetAuctionItem)
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });

        let auctionItem = [getAuctionItem];
    }

    const itemAuction = (auctionItem.id, auctionItem.description, auctionItem.name, auctionItem.price, auctionItem.photo) => {
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
                <div id={itemAuction.id} className="itemAuction">
                    <h2>{itemAuction.title} $ {itemAuction.price}</h2>
                    <img src={itemAuction.photo.src} alt={itemAuction.photo.alt} />
                    <p>{itemAuction.description}</p>
                </div>
            ))}
        </section>
    )

    
}