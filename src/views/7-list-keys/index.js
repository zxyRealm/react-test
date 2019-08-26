import React from 'react'
import './index.scss'
class List extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [
        '/map001.jpg',
        '/map002.jpg',
        '/map003.jpg',
        '/map004.jpg'
      ]
    }
  }
  imgList = () => {
    let { list } = { ...this.state }
    const imgList = list.map(item => {
      return (
        <li><img src={item} alt=""/></li>
      )
    })
    return (
      <ul>{imgList}</ul>
    )
  }
  render () {
    return (
      <div>
        <ul className="img__list">
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}><img src={'http://192.168.12.182' +item} alt=""/></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List