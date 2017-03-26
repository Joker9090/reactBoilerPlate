var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
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
