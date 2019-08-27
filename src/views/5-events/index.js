import React from 'react'

/*
 * React 事件使用注意事项
 * 1. 事件名小驼峰命名
 * 2. React 中不能通过返回 false 的方式阻止默认行为， 必须显式的使用 preventDefault
 * */

class ClickButton extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.clickPrevent = this.clickPrevent.bind(this)
    }
    // 阻止默认行为
    clickPrevent(e) {
        console.log('click wrapper')
        // return false
        e.preventDefault()
    }

    // 箭头函数改变 this
    clickByArrow = () => {
        console.log('arrow function', this)
    }

    // bind 绑定 this
    clickByBind(e) {
        e.preventDefault()
        console.log('bind this', this, e)
    }

    // 箭头函数改变 this 传递额外参数
    clickByArrowParams(id, e) {
        console.log('arrow function', id, e)
    }

    // bind 绑定 this 传递额外参数
    clickByBindParams(id, name, e, e2) {
        console.log('bind this', id, name, e, e2)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickByBind.bind(this)}>Click By Bind</button>
                <button onClick={this.clickByArrow}>Click By Arrow</button>
                <button onClick={this.clickByBindParams.bind(this, { id: 100 }, '哈哈哈哈')}>Bind Params</button>
                <button onClick={(e) => this.clickByArrowParams(120, e)}>Arrow Params</button>
                <a href="/" target="_blank" onClick={this.clickPrevent}>新的一页</a>
            </div>
        )
    }
}

export default ClickButton
