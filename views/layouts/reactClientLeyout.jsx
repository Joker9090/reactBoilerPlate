var React = require('react');
var ScriptReact = require('../utils/script');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <ScriptReact type="text/javascript"> https://unpkg.com/react@15/dist/react.js</ScriptReact>
          <ScriptReact type="text/javascript"> https://unpkg.com/react-dom@15/dist/react-dom.js</ScriptReact>
          <ScriptReact type="text/javascript"> https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js</ScriptReact>
        </head>
        <body>
          <h2>{this.props.title2}</h2>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
