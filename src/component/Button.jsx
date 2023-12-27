import React, { Component } from "react";

class Button extends Component {
    render() {
        return(
            <div className={this.props.btnClass} onClick={() => this.props.clickHandler(this.props.txt)}>
                { this.props.txt }
            </div>
        )
    }
}

export default Button