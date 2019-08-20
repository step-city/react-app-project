import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './component/table'
import Form from './component/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      characters: [{ name: '测试01', job: '程序员' }, { name: '测试02', job: '产品经理' }],
      comments: [],
      isShow: true
    }
  }

  //组件在被挂载到DOM后运行
  componentDidMount() {
    // const url = 'https：//ghibliapi.herokuapp.com/films'
    // fetch(url)
    //   .then(result => result.json())
    //   .then(result => {
    //     this.setState({
    //       data: result,
    //     })
    //   })

    //计时器 把计时器的ID保存在 this 之中
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ //进行一次 UI 更新
      date: new Date()
    });
    // State 的更新可能是异步的
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = character => { //此语法确保绑定了“this”
    if (character.name === '') {
      alert('请输入姓名')
    } else {
      this.setState({ characters: [...this.state.characters, character], isShow: true })
    }
  }

  createForm = () => {
    this.setState({ isShow: false })
  }


  render() {
    const { characters, isShow } = this.state
    let panelTab;
    if (isShow) {
      panelTab =
        <div className="panel">
          <button className="AddBtn" onClick={this.createForm}>新增</button>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
    } else {
      panelTab = <Form handleSubmit={this.handleSubmit} />
    }
    return (
      <div className="App">
        <header className="App-header">
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <img src={logo} className="App-logo" alt="logo" />
          {panelTab}
        </header>
      </div>
    );
  }
}

export default App;
