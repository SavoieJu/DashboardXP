import React from "react";


class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <input className="search-input" placeholder="Type your username here..."></input>
                <button className="search-enter">Search</button>
            </div>
        );
    }
}

export default Search;