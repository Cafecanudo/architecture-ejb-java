import React, {Component} from 'react'
import AmCharts from "@amcharts/amcharts3-react/index";

export default class RankingLojas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProvider: [{
        "country": "USA",
        "year2004": 3.5,
        "year2005": 4.2
      }, {
        "country": "UK",
        "year2004": 1.7,
        "year2005": 3.1
      }, {
        "country": "Canada",
        "year2004": 2.8,
        "year2005": 2.9
      }, {
        "country": "Japan",
        "year2004": 2.6,
        "year2005": 2.3
      }, {
        "country": "France",
        "year2004": 1.4,
        "year2005": 2.1
      }, {
        "country": "Brazil",
        "year2004": 2.6,
        "year2005": 4.9
      }]
    }
  }

  componentChart() {
    return React.createElement(AmCharts.React, {
      style: {
        width: "100%",
        height: "500px"
      },
      options: this.config()
    });
  }

  config() {
    return {
      "theme": "light",
      "type": "serial",
      "dataProvider": this.state.dataProvider,
      "valueAxes": [{
        "unit": "%",
        "position": "left",
        "title": "GDP growth rate",
      }],
      "startDuration": 1,
      "graphs": [{
        "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2004",
        "type": "column",
        "valueField": "year2004"
      }, {
        "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "year2005"
      }],
      "plotAreaFillAlphas": 0.1,
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start"
      },
      "export": {
        "enabled": true
      }

    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h6>Ranking de Lojas em Contingência</h6>
        </div>
        <div className="card-body">
          {this.componentChart()}
        </div>
      </div>
    )
  }
}