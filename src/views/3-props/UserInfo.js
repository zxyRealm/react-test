import React from 'react'
import './index.scss'

/*
* 将组件拆分成更小的组件，以便于维护
* 建议以组件自身命名props,而不是依赖上下文
* Props 的只读性，组件内不允许更改自身的props
* */

// 可对复杂组件进行拆分提取
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar"
                     src={props.author.url}
                     alt={props.author.name}/>
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {props.date}
            </div>
        </div>
    )
}

// 头像
function Avatar(props) {
    return (
        <img className="avatar"
             src={props.user.url}
             alt={props.user.name}/>
    )
}

// 用户信息
function UserInfo(props) {
    return (
        <div>
            <Avatar user={props.user}/>
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    )
}

// 进行组件提取后的 comment 组件结构
function Comment2(props) {
    return (
        <div>
            <UserInfo user={props.user}/>
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{props.date}</div>
        </div>
    )
}

export default Comment