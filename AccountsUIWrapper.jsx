AccountsUIWrapper = React.createClass({
  componentDidMount() {
    //use meteor blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      React.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    //clean up blaze view
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />
  }
});