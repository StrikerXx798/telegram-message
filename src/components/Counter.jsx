import s from "./Counter.module.css";
import React from "react";

class Counter extends React.Component {
    newAlertRef = React.createRef();

    onAlertClick = () => {
        let newAlert = this.newAlertRef.current.value;
        this.newAlertRef.current.value = '';
        this.props.addNumber(newAlert);
    }

    render = () => {
        return (
            <div className={s.counter}>
                <span> {this.props.numbers} </span>
                <input type="text" placeholder="Please enter you text.." ref={this.newAlertRef}/>
                <button onClick={this.onAlertClick}>
                    Alert!
                </button>
            </div>
        )
    }
}
export default Counter;