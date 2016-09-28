import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Icon, Row, Col ,Card} from 'antd';
// import 'antd/dist/antd.less';
// import 'common/lib/lib.js';
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
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="ghost">Ghost</Button>

      <div className="nav">
      <Row>
        <Col span={12}><Button type="primary">Primary</Button></Col>
        <Col span={6}><Button type="dashed">Dashed</Button></Col>
        <Col span={6}><Button>Default</Button></Col>
      </Row>
        <div className="bottom_nav">
          *******************
        </div>
      </div>
      <div className="app_content">
        <h1>
          <Icon type="meh" /><Icon type="github" />
        </h1>
        <span className="bg_1"></span>
        <span className="bg_2"></span>

      </div>

         <Card title="Card title" bordered={false}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
});
// ReactDOM.render(<DatePicker />, mountNode);
 ReactDOM.render(<App />, document.getElementById('app-content'));
