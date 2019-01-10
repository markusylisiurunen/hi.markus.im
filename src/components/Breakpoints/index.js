/**
 * @overview Breakpoints component for detecting device/window sizes.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { sortBreakpoints, getMedia } from './utils';

const BreakpointsContext = React.createContext();

class Breakpoints extends React.Component {
  // Define the default properties for the component
  static defaultProps = {
    breakpoints: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
    },
  };

  // Define the prop types
  static propTypes = {
    breakpoints: PropTypes.objectOf(PropTypes.number),
  };

  /**
   * Initialise the component.
   */
  constructor(props) {
    super(props);

    const { breakpoints } = props;
    const sortedBreakpoints = sortBreakpoints(breakpoints);

    const state = { sortedBreakpoints, media: null };

    if (typeof window !== 'undefined') {
      state.media = getMedia(sortedBreakpoints);
    }

    this.state = state;
  }

  /**
   * Update the computed state.
   */
  componentWillReceiveProps(nextProps) {
    const { breakpoints } = nextProps;

    if (breakpoints !== this.props.breakpoints) {
      const sortedBreakpoints = sortBreakpoints(breakpoints);

      this.setState({
        sortedBreakpoints,
        media: getMedia(sortedBreakpoints),
      });
    }
  }

  /**
   * Attach a resize event listener to the window.
   */
  componentDidMount() {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  /**
   * Remove the resize event listener.
   */
  componentWillUnmount() {
    if (typeof window === 'undefined') return;
    window.removeEventListener('resize', this.onResize);
  }

  /**
   * Handler for the resize event.
   */
  onResize = () => {
    const { sortedBreakpoints, media } = this.state;
    const newBreakpoint = getMedia(sortedBreakpoints);

    if (media !== newBreakpoint) {
      this.setState({ media: newBreakpoint });
    }
  };

  render() {
    const { breakpoints, children } = this.props;
    const { media } = this.state;

    return (
      <BreakpointsContext.Provider value={{ breakpoints, media }}>
        {children && children}
      </BreakpointsContext.Provider>
    );
  }
}

export default Breakpoints;

/**
 * A higher-order component to pass down the breakpoint data.
 */
export const withBreakpoints = WrappedComponent => props => (
  <BreakpointsContext.Consumer>
    {contextData => <WrappedComponent {...contextData} {...props} />}
  </BreakpointsContext.Consumer>
);
