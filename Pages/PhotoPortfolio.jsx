import { useState } from "react";
import Gallery from "../Components/Gallery";

export default function PhotoPortfolio () {

    const [actualPage, setActualPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    fetch ("localhost:3001/galleryItems")
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((total) => {
            setTotalPage(total % 20);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
        });

    const changePage = () => {
        let page = actualPage;
        const Back = document.getElementById(Back);
        const Next = document.getElementById(Next);

        switch (Next.onclick) {
            case (true):
                if (actualPage == totalPage)
                    console.log("error, maximum index achived");
                else {
                    return setActualPage(page++);
                }
                break;
            case (false): break;
        }

        switch (Back.onclick) {
            case (true):
                if (actualPage == 0)
                    console.log("error, minimum index achived");
                else {
                    return setActualPage(page--);
                }
                break;
            case (false): break;
        }

    return (actualPage);
    }

    return (
        <section>
            <Gallery />
            <div>
                <button className="BNbutton" id="Back" onClick={changePage}>Back</button>
                <h4 id="Holder_of_Page">{actualPage} / {totalPage}</h4>
                <button className="BNbutton" id="Next" onClick={changePage}>Next</button>
            </div>
        </section>
    );
}

