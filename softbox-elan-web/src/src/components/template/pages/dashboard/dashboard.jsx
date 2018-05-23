import React, { Component } from 'react'

import ContentHeader from '../../content-header/contentHeader'
import WidgetSmallBox from '../../widgets/smallBox'
import Graf from "../../charts/Graf";

export default class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
    }
  }

  widgets() {
    return (this.props.widgets || []).map((_it, i) => (
      <div key={i} className="col">
        <WidgetSmallBox item={_it} />
      </div>
    ))
  }

  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader title={this.props.title} breadcumbs={this.props.breadcumbs} />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {this.widgets()}
            </div>

            <div className="row">
              <Graf />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
