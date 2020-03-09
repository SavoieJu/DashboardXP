import React from "react";


class Search extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.');
    }


    render() {
        return (
            <div className="search">
                <input className="search-input" placeholder="Type your username here..."></input>
                <button className="search-enter" onClick={this.handleClick}>Search</button>
            </div>
        );
    }
}

export default Search;