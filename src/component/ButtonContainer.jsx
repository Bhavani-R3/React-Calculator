import React, { Component } from "react";
import Button from "./Button";

class ButtonContainer extends Component {
    render() {
        return(
            <div className="btn-container">
                <Button btnClass="btn op" txt="%" />
                <Button btnClass="btn red" txt="CE" />
                <Button btnClass="btn red" txt="C" />
                <Button btnClass="btn del" txt="<-" />
                <Button btnClass="btn" txt="7" />
                <Button btnClass="btn" txt="8" />
                <Button btnClass="btn" txt="9" />
                <Button btnClass="btn op" txt="x" />
                <Button btnClass="btn" txt="4" />
                <Button btnClass="btn" txt="5" />
                <Button btnClass="btn" txt="6" />
                <Button btnClass="btn op" txt="-" />
                <Button btnClass="btn" txt="1" />
                <Button btnClass="btn" txt="2" />
                <Button btnClass="btn" txt="3" />
                <Button btnClass="btn op" txt="+" />
                <Button btnClass="btn op" txt="/" />
                <Button btnClass="btn" txt="0" />
                <Button btnClass="btn" txt="." />
                <Button btnClass="btn equal" txt="=" />
            </div>
        )
    }
}

export default ButtonContainer