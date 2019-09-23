import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.scss'

// import HelloWorld from '../1-hello-world'
import Jsx from  '../2-jsx'
import Props from '../3-props'
import State from '../4-state'
import Events from '../5-events'
import Conditional from '../6-conditional'
import ListKeys from '../7-list-keys'
import Forms from '../8-forms'
import StateUp from '../9-state-up'
import Composition from '../10-composition'

const routers = [
    {
        path: '/jsx',
        sidebar: 'Jsx 语法与应用',
        main: () => <Jsx/>
    },
    {
        path: '/props',
        sidebar: 'Props',
        main: () => <Props/>
    },
    {
        path: '/state',
        sidebar: '状态',
        main: () => <State/>
    },
    {
        path: '/events',
        sidebar: '事件',
        main: () => <Events/>
    },
    {
        path: '/conditional',
        sidebar: '条件循环',
        main: () => <Conditional/>
    },
    {
        path: '/list-key',
        sidebar: '列表&Key',
        main: () => <ListKeys/>
    },
    {
        path: '/stateup',
        sidebar: '状态提升',
        main: () => <StateUp/>
    },
    {
        path: '/forms',
        sidebar: 'Forms',
        main: () => <Forms/>
    },
    {
        name: '组合VS继承',
        path: '/composition',
        sidebar: '组合VS继承',
        main: () => <Composition/>
    }
]

function Header () {
    return(
        <div className="header">
           <h1>React Test Demo</h1>
        </div>
    )
}

function RouterUl () {
    const items = routers.map((route, index) =>
        <li className="side__nav--item" key={index}>
            <Link to={route.path}>{route.sidebar}</Link>
        </li>)
    return (
        <ul className="side__nav">{items}</ul>
    )
}

class App extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <RouterUl/>
        )
    }
} 


function SiderNav () {
    return (
        <Router>
            <Header/>
            <div className="main">
                <Route path="/" component={App}/>
            
                <div className="content">
                    {
                        routers.map((route, index) =>
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.main}/>)
                    }
            
                </div>
            </div>
        </Router>
    )
}

export default SiderNav
