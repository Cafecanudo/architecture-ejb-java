import React, { Component } from 'react'

import Fullscreen from "react-full-screen";

import '../@core/dependencies'
import Navbar from '../components/template/navbar/navbar'
import Sidebar from '../components/template/sidebar/sidebar';
import Footer from '../components/template/footer/footer'
import Dashboard from "../components/template/pages/dashboard/dashboard";

import ChartRealTime from '../components/template/charts/ChartRealTime'

import Dialog from '../components/template/dialog'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class AppComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogVisible: false, chartDialog: null,
      isFull: false,
      title: "Dashboard Resumo",
      breadcumbs: [
        { url: 'dashboard', display: 'Dashboard' },
        { url: 'resumo', display: 'Resumo' },
      ],
      widgets: [
        { type: 'danger', value: '65', display: 'Notas pendentes p/h', action: this.notasPendentes },
        { type: 'info', value: '23.345', display: 'NFS-e Internalizadas no Mês' },
        { type: 'success', value: '4.5%', display: 'Notas em contingência' },
        { type: 'info', value: '44ms', display: 'Comunicação Sefaz', action: this.traficoSefaz },
      ]
    }
    this.notasPendentes = this.notasPendentes.bind(this)
    this.traficoSefaz = this.traficoSefaz.bind(this)
    this.setErroWidget = this.setErroWidget.bind(this)
    this.timer = this.timer.bind(this)
    this.goFull = this.goFull.bind(this)
    this.setFullState = this.setFullState.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
  }

  goFull() {
    this.setState({ isFull: !this.state.isFull });
  }

  setErroWidget(item) {
    this.setState({
      widgets: [
        { type: 'danger', value: '22.345', display: 'NFS-e Internalizadas no Mês' },
        { type: 'danger', value: '62', display: 'Notas pendentes p/h', action: this.notasPendentes },
        { type: 'success', value: '4.5%', display: 'Notas em contingência' },
        { type: 'info', value: '44ms', display: 'Comunicação Sefaz', action: this.traficoSefaz }
      ]
    })
  }

  componentDidMount() {
    this.setState({ countdown: setInterval(this.timer, 10000) });
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.state.countdown);
  }

  notasPendentes() {
    this.setState({
      dialogVisible: true,
      chartDialog: <ChartRealTime />
    })
  }

  closeDialog() {
    this.setState({ dialogVisible: false })
  }

  traficoSefaz() {

  }

  timer() {
    const list = ['info', 'danger', 'success', 'warning']
    const notasPen = getRandomInt(0, 70);
    const statusPen = list[(notasPen >= 20 && notasPen < 30 ? 3 : notasPen >= 30 ? 1 : 2)];

    const timeSefaz = getRandomInt(20, 1000);
    const statusSefz = list[(timeSefaz >= 200 && timeSefaz < 600 ? 3 : timeSefaz >= 600 ? 1 : 2)];


    const notasCont = (getRandomInt(1000, 50) / 100);
    const statusCont = list[(notasCont >= 5.0 && notasCont < 7.0 ? 3 : notasCont >= 7.0 ? 1 : 2)];
    this.setState({
      widgets: [
        { type: statusPen, value: notasPen, display: 'Notas pendentes p/h', action: this.notasPendentes },
        { type: statusSefz, value: timeSefaz + 'ms', display: 'Comunicação Sefaz', action: this.traficoSefaz },
        { type: statusCont, value: notasCont + '%', display: 'Notas em contingência' },
        { type: 'info', value: '22.345', display: 'NFS-e Internalizadas no Mês' }
      ]
    })
  }

  setFullState(s) {
    this.setState({ isFull: s })
    if (s) {
      $('body').addClass('sidebar-open sidebar-collapse container-full')
    } else {
      $('body').removeClass('sidebar-open sidebar-collapse container-full')
    }
  }

  render() {
    return (
      <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setFullState(isFull)}>
        <Dialog visible={this.state.dialogVisible} closeDialog={this.closeDialog}>
          {this.state.chartDialog || ''}
        </Dialog>
        <div className="wrapper">
          <Navbar widgetsAction={this.setErroWidget} actionFullscreen={this.goFull} />
          <Sidebar />
          <Dashboard widgets={this.state.widgets} breadcumbs={this.state.breadcumbs} title={this.state.title} />
          <Footer />
        </div>
      </Fullscreen>
    )
  }
}