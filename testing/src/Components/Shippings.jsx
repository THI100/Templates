import { useState } from "react";

export default function GPSTracking() {
    const [shippingData, setShippingData] = useState([]);
    const [showShippings, setShowShippings] = useState(false);

    const fetchShippings = () => {
        // Toggle visibility
        setShowShippings((prev) => !prev);

        // Only fetch if data is not already loaded
        if (shippingData.length === 0 || showShippings == true) {
            fetch("https://fakestoreapi.com/products")
                .then((res) => {
                    if (!res.ok) throw new Error("Network response was not ok");
                    return res.json();
                })
                .then((data) => {
                    // Assuming each product is a "shipping" here
                    setShippingData(data);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                });
        }
    };

    return (
        <section>
            <h2>GPS Tracking</h2>
            <div>
                <h3>See the status of your shippings:</h3>
                <button onClick={fetchShippings}>
                    {showShippings ? "Hide Status" : "Show Status"}
                </button>
            </div>

            {showShippings && (
                <div className="shipping-list">
                    {shippingData.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        shippingData.map((item) => (
                            <div key={item.id} className="shipping-item">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </section>
    );
}