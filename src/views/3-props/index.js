import React from 'react'
import ReactDOM from 'react-dom'

//  组件 和 props

/*
 * React 会将以小写字母开头的组件视为原生 DOM 标签。
 * 组件名称必须以大写字母开头。
 * */

// 函数组件
function Demo(props) {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <Text text='欢迎欢迎'/>
            <Text text='热烈欢迎'/>
        </div>
    )
}
// 组合组件
/*
* 组件可以在其输出中引用其他组件
* */
function Text(props) {
    return <p>{props.text}</p>
}

class WelCome extends React.Component {
    render(props) {
        return (
            <h1>hello, this is {props.name}</h1>
        )
    }
}

export default Demo