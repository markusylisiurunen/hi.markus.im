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

    // FIXME: See the FIXME comment below. This is to force SSR and re-hydration to be the exact
    // same.
    this.state = { sortedBreakpoints, media: sortedBreakpoints[0][0] };
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

    // FIXME: There is an issue with styled-components SSR and doing this type of layout
    // manipulation. Currently styled-components will use the SSR version during re-hydration and
    // does not update the classes (= styles) even if the prop differs from the server version. To
    // get around this, we need to update the prop on mount so that the layout settles.
    this.onResize();

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
