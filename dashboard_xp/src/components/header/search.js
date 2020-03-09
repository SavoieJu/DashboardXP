import React from "react";
const hiscores = require('osrs-json-hiscores');

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        // hiscores.getStats(this.state.name);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let response = this.responseText;

                let rows = response.split('\n');

                let parsedRes = [];
                
                rows.forEach((el)=>{
                    let col = el.split(",");
                    parsedRes.push(col)
                });
        
                //return result; //JavaScript object
                console.log(parsedRes);

            }
        }
        xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/a=122/index_lite.ws?player=" + this.state.name + "");
        xhr.setRequestHeader("Accept", 'application/json');
        xhr.send();

        // console.log(xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/a=122/index_lite.ws?player=Diogene"););
    }

    handleChange(e) {
        e.preventDefault();

        this.state.name = e.target.value;

        console.log(e.target.value);

    }


    render() {
        return (
            <div className="search">
                <input className="search-input" placeholder="Type your username here..." onChange={this.handleChange}></input>
                <button className="search-enter" onClick={this.handleClick}>Search</button>
            </div>
        );
    }
}

export default Search;