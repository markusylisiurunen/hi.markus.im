/**
 * @overview Breakpoints component.
 */

import React from 'react';

const BreakpointsContext = React.createContext({});

class Provider extends React.Component {
  state = {
    currentBreakpoint: null,
  };

  handleResize = () => {
    const windowWidth = window.innerWidth;
    const { breakpoints } = this.props;
    const { currentBreakpoint } = this.state;

    const breakpointNames = Object.keys(breakpoints);
    let newBreakpoint = null;

    for (let i = 0; i < breakpointNames.length; i += 1) {
      const bpName = breakpointNames[i];
      const bpWidth = breakpoints[bpName];

      if (bpWidth > windowWidth) continue;

      if (newBreakpoint === null || breakpoints[newBreakpoint] < bpWidth) {
        newBreakpoint = bpName;
      }
    }

    if (currentBreakpoint !== newBreakpoint) {
      this.setState({ currentBreakpoint: newBreakpoint });
    }
  };

  componentWillMount() {
    if (typeof window === 'undefined') return;

    this.handleResize();
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { breakpoints } = this.props;
    const { currentBreakpoint } = this.state;

    return (
      <BreakpointsContext.Provider value={{ breakpoints, currentBreakpoint }}>
        {this.props.children}
      </BreakpointsContext.Provider>
    );
  }
}

export default { Provider, Consumer: BreakpointsContext.Consumer };
