import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import CheckBox from './components/CheckBox/CheckBox';
class App extends Component {
  state = {
    checkedList: []
  }
  changeCheckBox = (value) => {
    console.log('value:',value);
    const valueIndex = this.state.checkedList.indexOf(value);
    const checkedList = [...this.state.checkedList];
    if ( valueIndex === -1 ) {
      checkedList.push(value);
    } else {
      checkedList.splice(valueIndex, 1);
    }
    this.setState({
      checkedList
    });
  }
  getChecked = (value) => {
    const valueIndex = this.state.checkedList.indexOf(value);
    if (valueIndex === -1 ) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Blog/>
        <CheckBox key="1" value="按钮1" checked={this.getChecked('按钮1')} onChange={this.changeCheckBox}>按钮1</CheckBox>
        <CheckBox key="2" value="按钮2" checked={this.getChecked('按钮2')} onChange={this.changeCheckBox}>按钮1</CheckBox>
      </div>
    );
  }
}

export default App;
