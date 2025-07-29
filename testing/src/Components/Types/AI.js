export default function ACItem(id, name, description, currentBid, category, isAvailable, createdAt, updated, updatedAt, endTime, historyBids) {
  return {
    id,
    name,
    description,
    currentBid,
    category,
    isAvailable,
    createdAt,
    updated,
    updatedAt,
    endTime,
    historyBids
  };
}