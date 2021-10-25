import React, { Component } from "react";

export default class Conversor extends Component {
    constructor(props) {
        super (props)

        this.state = {
            currency1_value: "",
            currency2_value: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        this.setState({currency1_value: event.target.value})
    }

    handleSubmit = event => {

        let conv = `${this.props.currency1}_${this.props.currency2}`
        let url = `https://free.currconv.com/api/v7/convert?q=${conv}&compact=ultra&apiKey=ef05dec389ab1ddae4ac`

        fetch(url).then(res=> { return res.json() }).then(json => { 
            let aux = json[conv];
            let currency2_value = parseFloat(this.state.currency1_value * aux).toFixed(2)
            this.setState({ currency2_value })
         })

        
        console.log(this.state.currency2_value)
        document.getElementById("result").value = this.state.currency2_value
        event.preventDefault();
    }


    render () {
        return (
            <form onSubmit={ this.handleSubmit } className="conversor">
                <h2>{ this.props.currency1 } to { this.props.currency2 }</h2>
                <input type="text" onChange={ this.handleChange } />
                <input type="text" id="result" disabled />
                <input type="submit" />
            </form>
        )
    }

}