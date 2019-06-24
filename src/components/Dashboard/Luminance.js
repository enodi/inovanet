import React from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import { Card } from "antd";
import Loader from "../../common/Loader";

const Luminance = ({ iotnodes }) => {
  const name = "Comfort Sensor - Office-translated (SimpleDevice)";
  return (
    <Card title="Luminance/Light Intensity" bordered={true} className="card--title">
      {
        iotnodes ?
          iotnodes.length > 0 ?
            iotnodes.filter(node => node.translatedFrom && node.name === name)
              .map(node => <h3 key={uniqueId()}>{node.value.luminance}</h3>)
            :
          <h2>Sorry, you don't have any data at the moment :(</h2>
            :
          <Loader />
      }
    </Card>
  )
}

const mapStateToProps = (state) => ({
  iotnodes: state.nodesList.items
});

export default connect(mapStateToProps, undefined)(Luminance);