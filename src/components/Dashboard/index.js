import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Switch } from "antd";
import AuthenticatedHeader from "../../common/AuthenticatedHeader";
import BackgroundTheme from "../../common/BackgroundTheme";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Luminance from "./Luminance";
import Door from "./Door";
import { listNodes } from "../../actions/iotnodes";

const Dashboard = ({ listNodes }) => {
  useEffect(() => {
    listNodes();
    // setInterval(() => listNodes(), 5000)
  }, [listNodes]);

  const [ theme, toggleTheme ] = BackgroundTheme();

  return (
    <div className={theme}>
      <AuthenticatedHeader />
      <div className="switch-component">
        <Switch defaultChecked onChange={toggleTheme} />
      </div>
      <Row gutter={24} className="dashboard">
        <Col className="dashboard__content" xs={24} sm={24} md={12} lg={12} xl={12}>
          <Temperature />
        </Col>
        <Col className="dashboard__content" xs={24} sm={24} md={12} lg={12} xl={12}>
          <Humidity />
        </Col>
        <Col className="dashboard__content" xs={24} sm={24} md={12} lg={12} xl={12}>
          <Luminance />
        </Col>
        <Col className="dashboard__content" xs={24} sm={24} md={12} lg={12} xl={12}>
          <Door />
        </Col>
      </Row>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  listNodes: () => dispatch(listNodes())
});


export default connect(undefined, mapDispatchToProps)(Dashboard);