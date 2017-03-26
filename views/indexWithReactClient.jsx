var React = require('react');
var ReactClienteLayout = require('./layouts/reactClientLeyout');
var ScriptReact = require('./utils/script');

class html extends React.Component {
  render() {
    return (
      <ReactClienteLayout title="hola mundo" title2="hola mundo">
        <div>{this.props.msg}</div>
        <div id={"test"}></div>
        <ScriptReact type="text/babel">./js/test.js</ScriptReact>
      </ReactClienteLayout>
    );
  }
}

module.exports = html;
