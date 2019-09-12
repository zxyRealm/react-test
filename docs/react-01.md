# 		React 项目创建初步应用

​	此文介绍的是React 16单页面应用的学习运用过程，并且选用脚手架构建方式，总体内容属于基础部分，仅推荐React 新手学习使用，

### 应用创建

`Create React App` 是 React 官方提供的一种创建新的[单页面应用](<https://react.docschina.org/docs/glossary.html#single-page-application>)的最佳方式

#### `npx` 方式

本地环境准备： 请确保本机上的node >= 8.10 和 npm >= 5.6。创建项目执行以下命令：

> **注意**
>
> npx 是 npm 5.2+ 附带的package运行工具；创建前不用全局安装`create-react-app`,  `npx`  命令会自动应用最新版本的 `create-react-app` 来创建应用

```bash
npx create-react-app my-app
cd my-app
npm start
```



#### `npm`  方式

请先确保本机环境  `npm` 6+

```bash
npm init react-app my-app
```



#### `Yarn` 方式

请确保本机环境 Yarn 0.25+

```
yarn create react-app may-app
```



### 核心概念



#### `JSX` 简介

`JSX` 语法为 React 推荐使用的，但是并不强制要求  

`jsx` 语法示例

```jsx
const ele = <h1> Hello World </h1>;
```

此标签语法既不是字符串也不是 HTML, 是一个JavaScript的语法扩展。



#### State & 生命周期

##### 正确使用 `setState()`

- 不要直接修改 State

  ```jsx
  // 错误使用方式,不会重新渲染组件
  this.state.comment = 'Hello'
  
  // 正确使用方式 使用setState()
  this.setState({comment: 'Hello'})
  ```

- State 的更新可能是异步的

  因为 `this.props` 和 `this.state` 可能是异步更新的， 所以不要依赖他们的值直接来更新下一个状态。

  例如，以下情况可能会无法更新

  ```jsx
  this.setState({
      counter: this.state.counter + this.props.increment
  })
  ```

  此时可以让 `setState()` 接收一个函数而不是一个对象。这个函数第一个参数为state, 第二个参数为 props:

  ```jsx
  this.setState((state, props) => ({
     counter: state.counter + props.increment 
  }))
  ```

- State 的更新会被合并

  当调用 `setState()` 的时候， React 会把提供的对象合并到当前的state中。

  例如， state中包含几个独立变量：

  ```react
  constructor () {
      super()
      this.state = {
          posts: [],
          comments: []
      }
  }
   
  /*
   使用时可以分别调用 setState() 来单独更新它们
   以下的合并是浅合并, 因此this.setState({comments})方法，
   会完全替换this.state.comments,并完整保留this.state.posts
  */
  componentDidMount () {
      fetchPosts().then(res => {
          this.setState({
              posts: res.data
          })
      })
      fetchComments().then(res => {
          this.setState({
              comments: res.data
          })
      })
  }
  ```

  

#### 事件处理

- 事件命名采用小驼峰（`camelClass`）,不是纯小写

- 使用`JSX`语法是需要传入一个事件处理函数，而不是字符串

  传统方式：

  ```html
  <button onclick="alertMessage()"> alert a message </button>
  ```

  React中使用方式：

```jsx
<button onClick={alertMessage}> alert a message </button>
```

- React中不可通过返回 `false` 方式组织默认行为，必须显式的使用 `preventDefault` 

  ```
  
  ```




#### 条件渲染

- 与运算符 &&

  ```
  
  ```

  

- 



#### 列表 & Key