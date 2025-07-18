import { useState } from 'react';
import 'styles/RollingGallery.css'; // Optional \\

// Import of images
import img1 from './Media/20231216_120014.jpg';
import img2 from './Media/20231218_104756.jpg';
import img3 from './Media/20240127_134532.jpg';

export default function RollingGallery() {
    return (
        <div>
            <img src={images} alt="Home_page short gallery" />
        </div>
    )
}

// Function to handle image sorting
async function images() {
    // Logic to sort images
    const images = [img1, img2, img3];

    for (let i = 0; i<images.length+1; i++) {
        const img = images[i];
        console.log(img);
        return img;
    }
}
