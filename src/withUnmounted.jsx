import React from 'react';

const withUnmounted = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.childRef = React.createRef();
    }

    componentWillUnmount() {
      this.childRef.current.hasUnmounted = true;
    }

    render() {
      return <WrappedComponent ref={this.childRef} {...this.props} />;
    }
  };
};

export default withUnmounted;
