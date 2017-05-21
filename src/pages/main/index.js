import React, { Component } from 'react';
import '~less/mainpage.less';
import NavTable from './NavTable';

class Main extends Component {
  render() {
    return (
      <div className="content">
        <div className="left">
          <NavTable />
        </div>
        <div className="right"></div>
      </div>
    )
  }
}

export default Main;