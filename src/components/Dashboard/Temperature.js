import React from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import "antd/dist/antd.css";
import { Card } from "antd";
import Loader from "../../common/Loader";

const Temperature = ({ iotnodes }) => {
  const name = "Comfort Sensor - Office-translated (SimpleDevice)";
  let temperatureValues = [];

  const generateArray = value => {
    for(let i = 0; i < 5; i++) {
      temperatureValues.push(value);
    }
    return temperatureValues;
  }

  return (
    <Card title="Temperature" bordered={true} className="card--title">
      {
        iotnodes ?
          iotnodes.length > 0 ?
            iotnodes.filter(node => node.translatedFrom && node.name === name)
              .map(node => {
                const temperature = node.value.temperature;
                const options = {
                  title: {
                    text: `${temperature}°C`
                  },
                  xAxis: {
                    categories: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
                  },
                  series: [{
                    showInLegend: false,
                    type: "line",
                    data: generateArray(temperature)
                  }],
                  credits: {
                    enabled: false
                  }
                }
                return (
                  <div key={uniqueId()}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                    />
                  </div>
                )
              })
            :
          <h2>Sorry, you don't have any data at the moment :(</h2>
            :
          <Loader />
      }
    </Card>
  );
}

const mapStateToProps = (state) => ({
  iotnodes: state.nodesList.items
});

export default connect(mapStateToProps, undefined)(Temperature);