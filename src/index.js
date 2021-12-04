import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
//import App from './App.js'


function App() {
  return (
    <>
      <Box1 name="加一" />
      <Box2 name="加二" />
    </>
  )
}
class Box1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add() {
    this.setState({ number: this.state.number += 1 })
    // 优点：setState可以对更新进行优化，
    // 如果下面写render函数会频繁调用render函数而导致页面卡顿
    // 缺点：setState是异步更新
    // 
  }

  minus() {
    this.setState({ number: this.state.number -= 1 })
  }
  render() {
    return (
      <div className="parent">
        我的name是{this.props.name}
        <hr />
        <span className="red">{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        {/* onClick.bind(undefind) */}

        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }

}
class Box2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add() {
    this.setState({ number: this.state.number += 2 })
  }
  minus() {
    this.setState({ number: this.state.number -= 2 })
  }
  render() {
    return (
      <div className="parent">
        Box2 是{this.props.name}
        <hr />
        <span className="red">{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}
render()
function render() {
  ReactDOM.render(<App />,
    document.getElementById('root')
  );
}



