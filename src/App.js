import React from 'react'
import 'antd/dist/antd.min.css'
import './App.scss'
import Jsx from './views/2-jsx'
import Props from './views/3-props'
import Components from './views/3-props/UserInfo'
import State from './views/4-state'
import Stateuse from './views/4-state/state'
import Events from './views/5-events'
import ConditionalAnd from './views/6-conditional'
import ListKeys from './views/7-list-keys'
import Forms from './views/8-forms'
import StateUp from './views/9-state-up'
import Composition from './views/10-composition'




function App() {
    let comment = {
        author: {
            name: '高校',
            url: '/favicon.ico'
        },
        text: '今日的风儿甚是喧嚣！',
        date: new Date().toLocaleDateString()
    }

    return (
        <div className="App">
            {/*<Jsx/>*/}
            {/*<Props name="Tom"/>*/}
            {/*<State/>*/}
            {/*<Stateuse price={5}/>*/}
            {/*<Components author={comment.author} text={comment.text} date={comment.date}/>*/}
            <Events/>
            {/*<ConditionalAnd user={{name: 'King Of This Country'}} />*/}
            <ListKeys/>
            <Forms/>
        </div>
    )
}

export default App
