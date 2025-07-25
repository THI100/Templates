import { useState } from "react";
import Gallery from "../Components/Gallery";

export default function PhotoPortfolio () {

    const [actualPage, setActualPage] = useState(1);

    const changePage = () => {
        let page = actualPage;
        const Back = document.getElementById(Back);
        const Next = document.getElementById(Next);

        switch (Next.onclick) {
            case (true): return setActualPage(page++); break;
            case (false): return NULL; break;
        }

        switch (Back.onclick) {
            case (true): return setActualPage(page--); break;
            case (false): return NULL; break;
        }

    return (actualPage);
    }

    return (
        <section>
            <Gallery />
            <div>
                <button className="BNbutton" id="Back" onClick={changePage}>Back</button>
                <h4 id="Holder_of_Page">{actualPage}</h4>
                <button className="BNbutton" id="Next" onClick={changePage}>Next</button>
            </div>
        </section>
    );
}

