import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "orange"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "green"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<Header />, document.getElementById('root'));
export default Header;