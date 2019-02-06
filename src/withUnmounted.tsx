import React from 'react';

const withUnmounted = <T extends React.ComponentType>(WrappedComponent: T) => {
  type withUnmountedHOCType = T & { hasUnmounted: boolean };

  return class extends React.Component {
    private childRef: React.RefObject<withUnmountedHOCType>;
    constructor(props: any) {
      super(props);
      this.childRef = React.createRef();
    }

    public componentWillUnmount() {
      if (this.childRef.current) {
        this.childRef.current.hasUnmounted = true;
      }
    }

    public render() {
      // @ts-ignore
      return <WrappedComponent ref={this.childRef} {...this.props} />;
    }
  };
};

export default withUnmounted;
