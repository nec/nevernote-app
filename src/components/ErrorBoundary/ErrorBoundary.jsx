import React from "react";

const style = {
  color: "red",
  textAlign: "center"
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p style={style}>Oops... something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
