import React, { Component } from "react";

class Button extends Component {
    render() {
        return(
            <div className={this.props.btnClass}>
                { this.props.txt }
            </div>
        )
    }
}

export default Button