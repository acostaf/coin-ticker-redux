import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItems } from '../actions';
import { Crypto } from './Crypto';

class App extends PureComponent {
  componentDidMount() {
    fetch('https://api.coincap.io/v2/assets')
      .then((res) => res.json())
      .then((res) => {
        this.props.addItems([...res.data.slice(0, 10), ...res.data.slice(0, 10)]);
      });
  }

  render() {
    return <Crypto items={this.props.items}></Crypto>;
  }
}

export default connect(
  (state) => ({ items: state.items }),
  (dispatch) => bindActionCreators({ addItems }, dispatch)
)(App);
