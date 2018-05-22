import React, {Component} from 'react'

import AmCharts from '@amcharts/amcharts3-react'

export default class Graf extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProvider: []
    }

    this.generateData = this.generateData.bind(this)
    //this.setProvider = this.setProvider.bind(this)
  }

  generateData() {
    var firstDate = new Date();
    var dataProvider = [];
    for (var i = 0; i < 100; ++i) {
      var date = new Date(firstDate.getTime());
      date.setDate(i);
      dataProvider.push({
        date: date,
        interval: 0,
        value: Math.floor(Math.random() * 100)
      });
    }
    return dataProvider;
  }

  /*setProvider() {
    this.setState({
      dataProvider: this.generateData()
    })
  }*/

  componentDidMount() {
    this.interval = setTimeout(() => {
      this.setState({dataProvider: this.generateData()})
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(AmCharts.React, {
      style: {
        width: "100%",
        height: "500px"
      },
      options: this.getConfig()
    });
  }

  getConfig() {
    return {
      "type": "serial",
      "theme": "light",
      "marginRight": 40,
      "marginLeft": 40,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled": true,
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth": true
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "graphs": [{
        "id": "g1",
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 1,
        "cursorColor": "#258cbb",
        "limitToGraph": "g1",
        "valueLineAlpha": 0.2,
        "valueZoomable": true
      },
      "valueScrollbar": {
        "oppositeAxis": false,
        "offset": 50,
        "scrollbarHeight": 10
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2012-07-27",
        "value": 13
      }, {
        "date": "2012-07-28",
        "value": 11
      }]
    }
  }
}