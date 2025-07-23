import { useState } from "react";

export default function SearchBar() {
    const [filtersVisible, setFiltersVisible] = useState(false);

    const toggleFilters = () => {
        setFiltersVisible(prev => !prev);
    };

    return (
        <section>
            <form action="/search" method="get">
                <input type="text" name="query" placeholder="Search..." />

                <button type="button" onClick={toggleFilters}>Filters</button>
                <input type="submit" value="Submit" />

                {filtersVisible && (
                    <div className="filters">
                        <fieldset>
                            <legend>Sort By</legend>
                            <input type="checkbox" name="sort" value="highToLow" id="highToLow" />
                            <label htmlFor="highToLow">Higher to lower</label>

                            <input type="checkbox" name="sort" value="lowToHigh" id="lowToHigh" />
                            <label htmlFor="lowToHigh">Lower to higher</label>

                            <input type="checkbox" name="sort" value="recommended" id="recommended" />
                            <label htmlFor="recommended">Recommendations</label>
                        </fieldset>

                        <fieldset>
                            <legend>Category</legend>
                            <input type="checkbox" name="category" value="electronics" id="electronics" />
                            <label htmlFor="electronics">Electronics</label>

                            <input type="checkbox" name="category" value="books" id="books" />
                            <label htmlFor="books">Books</label>

                            {/* Add more categories */}
                        </fieldset>
                    </div>
                )}
            </form>
        </section>
    );
}
