import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';

let App = React.createClass({
  getInitialState() {
    return {

    }
  },
  //页面入口
  componentDidMount() {
    const that = this;
    that.test();
  },
  test(){
    $('#div1').on('click',function(){
      alert(2);
    })
  },
  render() {
    return (
      <div>
      <div className="nav">
        <div className="top_nav">
            登录界面
        </div>
        <div className="bottom_nav">
          *******************
        </div>
      </div>

      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app-content-login'));
