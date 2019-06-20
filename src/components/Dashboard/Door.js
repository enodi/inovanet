import React from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import { Card } from "antd";
import Loader from "../../common/Loader";

const Door = ({ iotnodes }) => (
  <Card title="Door" bordered={true}>
    {
      iotnodes ?
        iotnodes.filter(node => node.translatedFrom)
          .map(node => {
            if (node.value.doorIsOpen) {
              return <h3 key={uniqueId()}>Open</h3>
            } else {
              return <h3 key={uniqueId()}>Closed</h3>
            }
        })
          :
        <Loader />
    }
  </Card>
);

const mapStateToProps = (state) => ({
  iotnodes: state.nodesList.items
});

export default connect(mapStateToProps, undefined)(Door);