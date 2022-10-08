import React from "react";
import "./SearchSection.scss";

function SearchSection() {
    return (
        <div className="searchBlock">
            <h1>Find it. Tour It. Own it.</h1>
            <div className="inputGroup">
                <input type="search" name="" id="" placeholder="Enter an address, neighborhood, city, or ZIP code" aria-label="Recipient's username" />
                <button className="btn_search">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png" alt="" />
                    </div>
                </button>
            </div>
        </div>

    )
}

export default SearchSection