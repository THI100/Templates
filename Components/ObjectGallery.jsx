import React, { useEffect, useState } from "react";

// Example API endpoint (replace with your actual endpoint)
const API_URL = "https://fakestoreapi.com/products";

const ObjectGallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {items.map((item) => (
        <img key={item.id} src={item.image} alt={item.title} width={100} />
      ))}
    </div>
  );
};

export default ObjectGallery;

