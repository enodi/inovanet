import React from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import { Card } from "antd";
import Loader from "../../common/Loader";

const Humidity = ({ iotnodes }) => (
  <Card title="Humidity/Moisture" bordered={true}>
    {
      iotnodes ?
        iotnodes && iotnodes.filter(node => node.translatedFrom)
          .map(node => <h3 key={uniqueId()}>{node.value.moisture}</h3>)
          :
        <Loader />
    }
  </Card>
)

const mapStateToProps = (state) => ({
  iotnodes: state.nodesList.items
});

export default connect(mapStateToProps, undefined)(Humidity);