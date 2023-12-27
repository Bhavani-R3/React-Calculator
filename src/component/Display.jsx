import React, { Component } from "react";

class Display extends Component {
    render() {
        return(
            <section className="display">
                <div className="inp">{
                    this.props.inp === "" ? 0 : this.props.inp
                }</div>
                <div className="out">{this.props.out}</div>
            </section>
        )
    }
}

export default Display