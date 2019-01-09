/**
 * @overview A state container component.
 */

import React from 'react';

const State = React.createContext(null);

class Provider extends React.Component {
  // Hold the global state here
  state = {
    menuOpen: false,
  };

  /**
   * Toggle the menu.
   */
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { children } = this.props;
    const { toggleMenu } = this;

    return (
      <State.Provider value={{ ...this.state, toggleMenu }}>
        {children}
      </State.Provider>
    );
  }
}

export default { Provider, Consumer: State.Consumer };
