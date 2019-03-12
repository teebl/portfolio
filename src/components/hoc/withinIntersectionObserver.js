import React, { PureComponent } from "react";
import registerScrollArea from "../../utilities/registerScrollArea";

const withIntersectionObserver = Component => {
  const subscriber = registerScrollArea();

  return class extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { intersecting: null };
      this.mounted = false;
      this.wrapper = null;
    }

    componentDidMount() {
      this.mounted = true;
      subscriber(this.wrapper).subscribe(
        intersecting => this.mounted && this.setState({ intersecting })
      );
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const { intersecting } = this.state;
      return (
        <div ref={wrapper => (this.wrapper = wrapper)}>
          <Component intersecting={intersecting} {...this.props} />
        </div>
      );
    }
  };
};

export default withIntersectionObserver;
