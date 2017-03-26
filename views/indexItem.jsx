var React = require('react');
var ScriptReact = require('./utils/script');

class html extends React.Component {
  render() {
    this.initNumber = 0;
    const listNames = this.props.names.map((name) =>
      <option value={name}>{name}</option>
    );
    return (
      <html>
        <head><title>hola Mundo</title></head>
        <body>
          {this.props.msg}
          <br></br>
          <select data-check={this.initNumber} id={"select"}>
            {listNames}
          </select>
          <br></br>
          <p id={"data-check-show"}>{this.initNumber}</p>
          <ScriptReact type="text/javascript">./js/increment.js</ScriptReact>

        </body>
      </html>
    );
  }
}

module.exports = html;
