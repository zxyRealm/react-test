import React from 'react'

// 条件渲染

function UserGreet() {
    return (
        <div> Welcome back! </div>
    )
}

function GuestGreet() {
    return(
        <div>Please sign up</div>
    )
}

function Welcome() {
    return <h1>热烈欢迎参加此次会议的小伙伴！</h1>
}


// 通过再创建一个组件决定显示哪个组件
function Greeting(props) {
    const isLoggedId = props.isLoggedIn
    if (isLoggedId) {
        return <UserGreet/>
    } else {
        return <GuestGreet/>
    }
}


// 阻止组件渲染
// render 方法直接返回null
// 在组件的 render 方法中返回 null 并不会影响组件的生命周期。
// 例如，上面这个示例中，componentDidUpdate 依然会被调用
class WarningText extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        console.log('mount', this.props)
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        return (
            this.props.warn ?
                <div>
                    this is a warn message
                </div> :
                null
        )
    }
}

class And extends React.Component {
    constructor() {
        super()
        this.state({
            isLoggedIn: false
        })
    }

    basicText(user) {
        console.log(user)
        if (!user.isLoginState) {
            return <span>Welcome Login</span>
        } else {
            return <span>{user.name}</span>
        }
    }

    render() {
        //  使用变量存储元素
        const isLoggedIn = this.state.isLoggedId
        let element
        if (isLoggedIn) {
            element = <UserGreet/>
        } else {
            element = <GuestGreet/>
        }
        // 三目运算符
        element = isLoggedIn ? <UserGreet/> : <GuestGreet/>
        return (
            <div>
                <WarningText warn={false}/>
                <Greeting/>
                {element}
                {/* 与运算符 && */}
                {isLoggedIn && <Welcome/>}
                {/*{this.basicText(this.props.user)}*/}
            </div>
        )
    }
}

export default And