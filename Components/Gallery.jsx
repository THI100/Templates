// Needs a server in case of application
import React from "react";

// Factory function to generate up to 20 image objects
function createImageObjects(count = 20) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push({
      id: i,
      src: `https://picsum.photos/seed/${i}/300/200`,
      alt: `Gallery image ${i}`,
    });
  }
  return images;
}

const Gallery = () => {
  const images = createImageObjects();
  return (
    <div>
      {images.map((img) => (
        <img key={img.id} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

export default Gallery;
