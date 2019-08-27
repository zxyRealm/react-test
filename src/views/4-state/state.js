import React from 'react'

/*
 * 使用 setState() 应该了解三件事：
 * 1. 不要直接修改 State
 * 2. State 的更新可能是异步的
 * 3. State 的更新会被合并
 * */

class StateUse extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            count: 10
        }
        this.updateCount = this.updateCount.bind(this)
    }
    componentDidMount() {}

    updateCount () {
        console.log(this)
        // setState() 接收一个函数而不是一个对象
        // 这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
        this.setState((state, props) => ({
            total: state.count * props.price
        }))
        // this.setState({
        //     text: '新来的'
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.state.count++
        // this.state.text = '新来哒'
    }

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <h1>hello world!</h1>
                <p>这个有{this.state.count}水果{this.state.text}</p>
                <span>总价：{this.state.total}</span>
                <button onClick={this.updateCount}>添加水果</button>
            </div>
        )
    }
}

export default StateUse
