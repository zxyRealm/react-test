import React from 'react'

// 受控组件

// 使 React 的 state 成为“唯一数据源”。
// 渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
// 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
// <input type="text">, <textarea> 和 <select> 之类的标签都非常相似—它们都接受一个 value 属性
// 你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：
class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            going: true,
            num: 4
        }

    }
    handleSubmit (e) {
        console.log(this.state)
        e.preventDefault()
    }
    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    参与：
                    <input
                        type="checkbox"
                        name="going"
                        checked={this.state.going}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    <input
                        name="num"
                        value={this.state.num}
                        onChange={this.handleInputChange}
                        type="number"/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

export default Reservation
