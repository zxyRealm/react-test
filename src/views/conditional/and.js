import React from 'react'

// 组织组件渲染
// render 方法直接返回null
class WarningText extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  componentDidMount () {
    console.log('mount', this.props)
  }
  componentDidUpdate () {
    console.log(this.props)
  }

  render () {
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
  basicText (user) {
    console.log(user)
    if (!user.isLoginState) {
      return <span>Welcome Login</span>
    } else {
      return <span>{user.name}</span>
    }
  }

  render () {
    return (
      <div>
        <WarningText warn={false}/>
        {this.basicText(this.props.user)}
      </div>
    )
  }
}

export default And