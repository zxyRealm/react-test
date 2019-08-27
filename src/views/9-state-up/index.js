import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function  BoilingVerdict(props) {
    const isBoil = props.celsius
    if (isBoil) {
        return <p> The water would boil.</p>
    } else {
        return <p> The water would not boil.</p>
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
        }
    }
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}/>

                <BoilingVerdict
                    celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}

export default Calculator