import React, {Component} from 'react'

import ContentHeader from '../../content-header/contentHeader'
import WidgetSmallBox from '../../widgets/smallBox'
import VisalGeral from "../../charts/VisalGeral";
import VisaoBrasil from "../../charts/VisaoBrasil";
import RankingLojas from "../../charts/RankingLojas";
import NotasNaoEnviadasSefaz from "../../charts/NotasNaoEnviadasSefaz";

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
        <WidgetSmallBox item={_it}/>
      </div>
    ))
  }

  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader title={this.props.title} breadcumbs={this.props.breadcumbs}/>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {this.widgets()}
            </div>

            <div className="row">
              <div className="col">
                <VisalGeral/>
              </div>
              <div className="col">
                <VisaoBrasil/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <RankingLojas/>
              </div>
              <div className="col">
                <NotasNaoEnviadasSefaz/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
