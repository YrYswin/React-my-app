import React, { Component } from "react";

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            text: "",
            message: "",
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decremnet = () => {
        if (this.state.count >= 1) {
            this.setState({ count: this.state.count - 1 })
        } else {
            alert("You don't write in massage")
        }
    }

    plusTen = () => {
        this.setState({ count: this.state.count + 10 })
    }
    minusTen = () => {
        if (this.state.count >= 10) {
            this.setState({ count: this.state.count - 10 })
        } else {
            alert('NON minus 10')
        }
    }

    multiply = () => {
        this.setState({ count: this.state.count * 2 })
    }

    divide = () => {
        this.setState({ count: this.state.count / 2 })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ text: event.target.value })
    }

    send = () => {
        if (this.state.text === '') {
            alert('NON')
        } else {
            this.setState({ message: this.state.text })
            this.setState({ text: '' })
        }
    }


    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decremnet}>-</button>
                <button onClick={this.plusTen}>+10</button>
                <button onClick={this.minusTen}> -10</button>
                <button onClick={this.multiply}>x2</button>
                <button onClick={this.divide}>/2</button><br />

                <p>{this.state.text}</p>
                <input onChange={this.handleChange} type='text' placeholder="Text write" value={this.state.text} />
                <button onClick={this.send}>Send</button><br />

                {this.state.message}
            </div>
        )
    }
}