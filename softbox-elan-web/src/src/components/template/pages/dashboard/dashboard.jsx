import React, {Component} from 'react'

import ContentHeader from '../../content-header/contentHeader'
import WidgetSmallBox from '../../widgets/smallBox'
import Graf from "./Graf";

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

            </div>
            <div className="row">
              {this.widgets()}
            </div>

            <div className="row">
              <Graf/>
            </div>

            {/*<div className="row">*/}
              {/*<div className="col-lg-6">*/}
                {/*<div className="card">*/}
                  {/*<div className="card-body">*/}
                    {/*<h5 className="card-title">Pagina Demo</h5>*/}
                    {/*<div id="chartdivStacked"></div>*/}
                    {/*<p className="card-text">*/}
                      {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis debitis*/}
                      {/*ea facilis fugit, illum magni molestias, non perspiciatis possimus totam.*/}
                    {/*</p>*/}
                    {/*<a href="#" className="card-link">Link</a>*/}
                  {/*</div>*/}
                {/*</div>*/}

                {/*<div className="card card-primary card-outline">*/}
                  {/*<div className="card-body">*/}
                    {/*<h5 className="card-title">Página Demo 2</h5>*/}
                    {/*<div id="chartDuration"></div>*/}
                    {/*<p className="card-text">*/}
                      {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. At hic nemo, nihil non*/}
                      {/*officia porro quasi rerum tempore? Commodi facilis, ipsam.*/}
                    {/*</p>*/}
                    {/*<a href="#" className="card-link">Link</a>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div className="col-lg-6">*/}
                {/*<div className="card">*/}
                  {/*<div className="card-header">*/}
                    {/*<h5 className="m-0">Outra Pagina</h5>*/}
                  {/*</div>*/}
                  {/*<div className="card-body">*/}
                    {/*<h6 className="card-title">Página titulo destacado</h6>*/}
                    {/*<div id="chartAreaTime"></div>*/}
                    {/*<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab*/}
                      {/*nesciunt sapiente soluta.</p>*/}
                    {/*<a href="#" className="btn btn-primary">Consultar</a>*/}
                  {/*</div>*/}
                {/*</div>*/}

                {/*<div className="card card-primary card-outline">*/}
                  {/*<div className="card-header">*/}
                    {/*<h5 className="m-0">Outra Pagina</h5>*/}
                  {/*</div>*/}
                  {/*<div className="card-body">*/}
                    {/*<h6 className="card-title">Página titulo destacado</h6>*/}

                    {/*<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quae*/}
                      {/*ullam voluptatem.</p>*/}

                    {/*<div id="chartdivDrillDown"></div>*/}

                    {/*<a href="#" className="btn btn-primary">Consultar Dados</a>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          </div>
        </section>
      </div>
    )
  }
}
