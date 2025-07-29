// Needs revision

import ECItem from "./Types/ECI";
import ObjectGallery from "./ObjectGallery";

// Sample
const exampleItem = ECItem(
  0,
  "Example",
  "This is an example auction item.",
  100,
  "Art",
  true,
  "2023-10-01T12:00:00Z",
  false,
  " ",
);

export default function ECommerceItem() {
  return (
    <section>
      <h2>#{exampleItem.id}: {exampleItem.name}</h2>

      {/* Left */}
      <ObjectGallery />

      {/* Right */}
      <div>
        <h2>Price: </h2><h3>${exampleItem.price}</h3>
        <h3>Status: {exampleItem.isAvaliable ? "Available" : "Not Available"}</h3>
        <h3>Created At: {new Date(exampleItem.createdAt).toLocaleString()}</h3>
        <h3>Updated At: {exampleItem.updated ? new Date(exampleItem.updatedAt).toLocaleString() : "Never updated"}</h3>
      </div>

      <div>
        <h3>Description</h3>
        <p>{exampleItem.description}</p>
        <h3>Category: {exampleItem.category}</h3>
      </div>
    </section>
  );
}