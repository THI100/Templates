// Needs revision

import ACItem from "./Types/AI";
import ObjectGallery from "./ObjectGallery";

// Sample
const exampleItem = ACItem(
  0,
  "Example",
  "This is an example auction item.",
  100,
  "Art",
  true,
  "2023-10-01T12:00:00Z",
  false,
  " ",
  "2023-10-05T12:00:00Z",
  [50, 75, 90]
);

function AuctionItem() {
  return (
    <section>
      <h2>#{exampleItem.id}: {exampleItem.name}</h2>

      <div>
        <ObjectGallery />

        <div>
          <h3>Current Bid: ${exampleItem.currentBid}</h3>
          <p>End: {new Date(exampleItem.endTime).toLocaleString()}</p>
          <p>Status: {exampleItem.isAvailable ? "Available" : "Not Available"}</p>
          <p>Created At: {new Date(exampleItem.createdAt).toLocaleString()}</p>
          <p>Updated At: {exampleItem.updated ? new Date(exampleItem.updatedAt).toLocaleString() : "Never updated"}</p>

          <div>
            <h4>Bid History:</h4>
            <ul>
              {exampleItem.historyBids.map((bid, index) => (
                <li key={index}>${bid}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h4>Description</h4>
        <p>{exampleItem.description}</p>
        <p>Category: {exampleItem.category}</p>
      </div>
    </section>
  );
}

export default AuctionItem;