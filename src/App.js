import React from 'react'
import 'antd/dist/antd.min.css'
import './App.scss'
import Jsx from './views/2-jsx'
import Click from './views/5-events'
import ConditionalAnd from './views/6-conditional'
import ListKeys from './views/7-list-keys'

function App () {
  return (
    <div className="App">
      <Click/>
      <Jsx/>
      <ConditionalAnd user={{name: 'King Of This Country'}} />
      <ListKeys/>
    </div>
  )
}

export default App
