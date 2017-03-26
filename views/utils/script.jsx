var React = require('react');

class ScriptReact extends React.Component {
  render() {
    return (
      <script type={this.props.type} src={this.props.children}> </script>
    )
  }
}


module.exports = ScriptReact;
