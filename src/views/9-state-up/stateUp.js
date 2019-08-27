import React from 'react'
// import Calculator from './index'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

// 组件提取
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
        // this.setState({ temperature: e.target.value })
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    } else {
        return <p>The water would not boil.</p>
    }
}

// 摄氏度和华氏度互相转换
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

class Calculator2 extends React.Component {
    constructor(props) {
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange(temperature) {
        this.setState({
            temperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            temperature,
            scale: 'f'
        })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
        return (
            <div>
                <TemperatureInput
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                    scale="c"/>
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict
                    clesius={parseFloat(celsius)}/>
            </div>
        )
    }
}

export default Calculator2
