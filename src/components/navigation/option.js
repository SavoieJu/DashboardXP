import React from "react";

class Option extends React.Component {
    render() {
        return (
            <div className="navigation-option">
                <h2>{this.props.option}</h2>
            </div>
        );
    }
}

export default Option;