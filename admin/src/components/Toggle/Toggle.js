import { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on,
    }));
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default Toggle;
