import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
//import App from './App.js'
import useUpdate from './useUpdate';

function App() {
  return (
    <div className="App">
      爸爸
      <Son />
    </div>
  )
}
class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0
    }
  }
  add() {
    this.setState({ n: this.state.n + 1 })
  }
  minus() {
    this.setState({ n: this.state.n - 1 })
  }
  render() {
    return (
      <div className="Son">
        儿子 n:{this.state.n}
        <button onClick={() => this.add()}>+</button>
        <Grandson />
      </div>
    )
  }
}

const Grandson = () => {
  const [n, setN] = useState(0)
  useUpdate(() => {
    console.log('变了')
  }, n)
  return (
    <div className="Grandson">
      n:{n}
      <button onClick={() => setN(n + 1)}>+</button>
    </div>
  )
}

// const App = propd => {
//   const [childVisible, setChildVisible] = useState(true)
//   return (
//     <div>
//       {childVisible ?
//         <button onClick={() => setChildVisible(false)}>hide</button> :
//         <button onClick={() => setChildVisible(true)}>show</button>}
//       {childVisible ? <Child /> : null}
//     </div>
//   )
// }
// const Child = props => {
//   useEffect(() => {
//     console.log('render Child')
//     return () => {
//       console.log('Child hided')
//     }
//   })
//   return (
//     <div>child</div>
//   )
// }
ReactDOM.render(<App />, document.getElementById('root'));




