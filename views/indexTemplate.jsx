var React = require('react');
var DefaultLayout = require('./layouts/default');

class html extends React.Component {
  render() {
    return (
      <DefaultLayout title="hola mundo" title2="hola mundo">
        <div>{this.props.msg}</div>
      </DefaultLayout>
    );
  }
}

module.exports = html;
