/**
 * Created by float.. on 2017/5/22.
 */
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '~less/mainpage.less';

let cx = classNames.bind(styles);

class NavItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data } = this.props;
    return(
      <div className="position-item">
        <div className={cx({name:true,ccc:true,aaa:false})}>mac 开发工程师</div>
        <div className="number">12</div>
      </div>
    );
  }
}

class NavList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div className="department">
          <span className={cx(['name','aaa','ccc'])}>工程研发部门</span>
          <span className="count">120</span>
        </div>
        <div className="list">
          <NavItem />
        </div>
      </div>
    );
  }
}

export default class NavTable extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <span className={'name'}>招聘职位</span>
          <span>清空</span>
        </div>
        <div className="content">
          <NavList />
        </div>
      </div>
    );
  }
}
