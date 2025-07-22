import { useState } from "react";
import { useEffect } from "react";

function div() {
    
}

export default function TestimonialSection() {

    const profiles = () => {
        for (let i = 1; i <= 5; i++) {
            profiles.push({
                id: i,
                src: `https://picsum.photos/seed/${i}/100/100`,
                alt: `Profile picture ${i}`,
                text: `Testimonial text for user ${i}.`,
                user: `User ${i}`
            });
        }
        // If you want to change it for a .map, just do it!
    }

    return (
        <section>
            <h1>Testimonies of users</h1>

            <div className="testimonial" id="testimonial1">
            <h1>{profiles.user}</h1>
            <hr />
            <img src={profiles.src} alt={profiles.alt} />
            <p>{profiles.text}</p>
            </div>

            <div className="testimonial" id="testimonial2">
            <h1>{profiles.user}</h1>
            <hr />
            <img src={profiles.src} alt={profiles.alt} />
            <p>{profiles.text}</p>
            </div>

            <div className="testimonial" id="testimonial3">
            <h1>{profiles.user}</h1>
            <hr />
            <img src={profiles.src} alt={profiles.alt} />
            <p>{profiles.text}</p>
            </div>

            <div className="testimonial" id="testimonial4">
            <h1>{profiles.user}</h1>
            <hr />
            <img src={profiles.src} alt={profiles.alt} />
            <p>{profiles.text}</p>
            </div>

            <div className="testimonial" id="testimonial5">
            <h1>{profiles.user}</h1>
            <hr />
            <img src={profiles.src} alt={profiles.alt} />
            <p>{profiles.text}</p>
            </div>
        </section>
    );

}