import React from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import { Card } from "antd";
import Loader from "../../common/Loader";

const Door = ({ iotnodes }) => {
  const name = "Strips Guard 1 6-translated (SimpleDevice)";
  return (
    <Card title="Door" bordered={true} className="card--title">
      {
        iotnodes ?
          iotnodes.length > 0 ?
            iotnodes.filter(node => node.translatedFrom && node.name === name)
              .map(node => {
                if (node.value.doorIsOpen) {
                  return <h3 key={uniqueId()}>Open</h3>
                } else {
                  return <h3 key={uniqueId()}>Closed</h3>
                }
            })
            :
          <h2>Sorry, you don't have any data at the moment :(</h2>
            :
          <Loader />
      }
    </Card>
  )
};

const mapStateToProps = (state) => ({
  iotnodes: state.nodesList.items
});

export default connect(mapStateToProps, undefined)(Door);