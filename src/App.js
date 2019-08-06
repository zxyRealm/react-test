import React from 'react'
import './App.scss'
import Clock from './views/clock'
import Jsx from './views/jsx'
import Click from './views/event'
import Semantic from './views/semantic'
import ConditionalAnd from './views/conditional/and'
import ImgList from './views/list'
// import HelloWorld from './views/hello-world.js'

function App () {
  return (
    <div className="App">
      <Clock/>
      {/*<HelloWorld/>*/}
      <Click/>
      <Jsx/>
      <Semantic/>
      <ConditionalAnd user={{name: 'King Of This Country'}} />
      <ImgList/>
    </div>
  )
}

export default App
