import React from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import "antd/dist/antd.css";
import { Card } from "antd";
import Loader from "../../common/Loader";

const Temperature = ({ iotnodes }) => (
  <Card title="Temperature" bordered={true}>
    {
      iotnodes ?
        iotnodes && iotnodes.filter(node => node.translatedFrom)
          .map(node => <h3 key={uniqueId()}>{node.value.temperature}</h3>)
          :
        <Loader />
    }
  </Card>
)

const mapStateToProps = (state) => ({
  iotnodes: state.nodesList.items
});

export default connect(mapStateToProps, undefined)(Temperature);