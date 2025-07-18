import { useState, useEffect } from 'react';
import 'styles/RollingGallery.css'; // Optional

import img1 from './Media/20231216_120014.jpg';
import img2 from './Media/20231218_104756.jpg';
import img3 from './Media/20240127_134532.jpg';

const imageArray = [img1, img2, img3];

export default function RollingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % imageArray.length);
    }, 3000 // Time in milliseconds to change the image
    ); 

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="rolling-gallery">
      <img src={imageArray[currentIndex]} alt="Gallery" className="gallery-image" />
    </div>
  );
}
