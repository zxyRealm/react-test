import React from 'react'

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(()=> this.tick(),1000)
    }

    tick () {
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <h1>hello world!</h1>
                <p>It is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock
