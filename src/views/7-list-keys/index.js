import React from 'react'
import './index.scss'

// 基础列表组件
/*
 * key 帮助React识别哪些元素变化了，key需要在列表中是唯一的
 * key 只是在兄弟节点之间必须唯一
 * */
function ImgList(props) {
    let lists = props.list.map((item, index) => (
        <li key={index}><img src={item} alt=""/></li>
    ))
    return (
        <ul className="img__list">
            {lists}
        </ul>
    )
}

function ListItem(props) {
    return <li><img src={props.info} alt=""/></li>
}

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                '/img/mmd001.jpg',
                '/img/mmd002.jpg',
                '/img/mmd003.jpg',
                '/img/mmd004.jpg'
            ]
        }
    }

    render() {
        const list = this.state.list
        return (
            <div>
                <ImgList list={this.state.list}/>
                <ul className="img__list">
                    {
                        list.map((item, index) => {
                            return (
                                <ListItem key={index} info={item}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List