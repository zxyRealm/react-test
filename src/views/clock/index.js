import React from 'react'

class Clock extends React.Component {
  constructor () {
    super()
    this.state = {
      // number: '',
      name: 'this is a test demo',
      date: new Date()
    }
  }

  // 组件挂载
  componentDidMount () {
    this.number = 10
    setTimeout(() => {
      this.number = 20
    }, 2000)
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  // 组件卸载
  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <h1>hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <p>当前数量{this.number}</p>
      </div>
    )
  }
}

export default Clock
