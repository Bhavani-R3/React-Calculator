import React, { Component } from "react";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inp: "",
            out: "0"
        } 
        this.btnHandler = this.btnHandler.bind(this); // method binding
    }

    // main handler function
    btnHandler(val) {
        console.log(`btn value =`, val)
        if(val === "C") {
            this.clear()
        } else if(val === "CE") {
            this.masterClear()
        } else if(val === "=") {
            this.calculate()
        } else if(val === "<-") {
            this.backspace()
        } else if(val === "+/-") {
            this.sinConvertor()
        } else if(val === "sqrt") {
            this.sqrt()
        }  else {
            // number, math operator
            this.setState({
                inp: this.state.inp + val
            })
        }
    }

    // clear - C
    clear() {
        this.setState({
            inp: ""
        })
    }

    // master clear - CE
    masterClear() {
        this.setState({
            inp: "",
            out: 0
        })
    }

    // calculate - =
    calculate() {
        this.setState({
            out: eval(this.state.inp)
        })
    }

    // backspace - <-
    backspace() {
        let x = this.state.inp.slice(0,-1)
        // let x = this.state.inp.substring(0, this.state.inp.length-1)
        this.setState({
            inp: x
        })
    }

    // sinConvertor - +/-
    sinConvertor() {
        this.setState({
            out: Math.sin(this.state.out)
        })
    }

    // e 
    sqrt() {
        let x = Number(this.state.inp) 
        this.setState({
            out: Math.sqrt(x)
        })
    }

    render() {
        return (
            <div className="cal-container">
                <Display {...this.state} />
                <ButtonContainer btnClick={this.btnHandler} />
            </div>
        )
    }
}

export default Calculator