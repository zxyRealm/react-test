import React from 'react'
import ReactDOM from 'react-dom'

function jsx() {
    const name = 'Tom'
    const age = 20
    let index = 3
    // const canvas = <canvas
    //     width={100}
    //     height={50}
    //     onClick={() => {
    //         console.log('click')
    //     }}/>
    // console.log(canvas)
    /*
     * 嵌入表达式
     * 大括号内可以放置任何有效的JavaScript表达式
     * JSX 本身也是个表达式，可以if 语句和for循环的代码中使用
     * 属性值为字符串值用引号包裹，当嵌入JavaScript表达式时可以使用大括号，但不要在大括号外加引号
     * 属性名称规定使用小驼峰命名
     * JSX 默认转义，有效防xss攻击
     * JSX 表示对象，被React.createElement()函数调用，转换成 "React 元素"
     *  */
    const ele = (
        <div>
            <h2> this is a jsx template demo</h2>
            <p
                className="test-demo"
                dataage={age}
                data-key={index + 'test'}>
                {name} is a young boy, he is {age} years old
            </p>
        </div>
    )
    // console.log(ele)
    return ele
}

/*
 * React 元素是创建开销极小的普通对象
 * React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。
 * 一个元素就像电影的单帧：它代表了某个特定时刻的 UI。
 * */
// 演示此部分代码请复制到index.js
function tick() {
    const ele = (
        <div>
            <h1>hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(ele, document.getElementById('root'))
}
// setInterval(tick, 1000)

export default jsx
