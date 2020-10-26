"use strict";
function Homepage() {
  return (
    <React.Fragment>
      <p>This is a great site for viewing trading cards.</p>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
// first parameter: component that we want to render
// second parameter: where we want to render it
// 2. Edit in return value in homepage fxn


