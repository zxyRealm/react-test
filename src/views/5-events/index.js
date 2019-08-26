import React from 'react'

class ClickButton extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  // 箭头函数改变 this
  clickByArrow = () => {
    console.log('arrow function', this)
  }

  // bind 绑定 this
  clickByBind (e) {
    console.log('bind this', this, e)
  }

  // 箭头函数改变 this 传递额外参数
  clickByArrowParams (id, e) {
    console.log('arrow function', id, e)
  }

  // bind 绑定 this 传递额外参数
  clickByBindParams (id, name, e, e2) {
    console.log('bind this', id, name, e, e2)
  }

  render () {
    return (
      <div>
        <button onClick={this.clickByBind.bind(this)}>Click By Bind</button>
        <button onClick={this.clickByArrow}>Click By Arrow</button>
        <button onClick={this.clickByBindParams.bind(this, {id: 100}, '哈哈哈哈')}>Bind Params</button>
        <button onClick={(e) => this.clickByArrowParams(120, e)}>Arrow Params</button>
      </div>
    )
  }
}

export default ClickButton
