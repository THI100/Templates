// This is a example of a Auction Item

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

      {/* Left */}
      <ObjectGallery />

      {/* Right */}
      <div>
        <h2>Current Bid: </h2><h3>${exampleItem.currentBid}</h3>
        <h2>End: {exampleItem.endTime}</h2>
        <h3>Status: {exampleItem.isAvailable ? "Available" : "Not Available"}</h3>
        <h3>Created At: {exampleItem.createdAt}</h3>
        <h3>Updated At: {exampleItem.updated ? exampleItem.updatedAt : "Never updated"}</h3>

        <div>
          <h3>History Bids</h3>
          <ul>
            {exampleItem.historyBids.map((bid, index) => (
              <li key={index}>${bid}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3>Description</h3>
        <p>{exampleItem.description}</p>
        <h3>Category: {exampleItem.category}</h3>
      </div>
    </section>
  );
}

export default AuctionItem;