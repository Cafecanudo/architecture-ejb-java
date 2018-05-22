import React, {Component} from 'react'

import Fullscreen from "react-full-screen";

import '../@core/dependencies'
import Navbar from '../components/template/navbar/navbar'
import Sidebar from '../components/template/sidebar/sidebar';
import Footer from '../components/template/footer/footer'
import Dashboard from "../components/template/pages/dashboard/dashboard";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class AppComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFull: false,
      title: "Dashboard Resumo",
      breadcumbs: [
        {url: 'dashboard', display: 'Dashboard'},
        {url: 'resumo', display: 'Resumo'},
      ],
      widgets: [
        {type: 'danger', value: '65', display: 'Notas pendentes p/h'},
        {type: 'info', value: '23.345', display: 'NFS-e Internalizadas no Mês'},
        {type: 'success', value: '4.5%', display: 'Notas em contingência'},
        {type: 'info', value: '44ms', display: 'Comunicação Sefaz'},
      ]
    }
    this.setErroWidget = this.setErroWidget.bind(this)
    this.timer = this.timer.bind(this)
    this.goFull = this.goFull.bind(this)
    this.setFullState = this.setFullState.bind(this)
  }

  goFull() {
    this.setState({isFull: !this.state.isFull});
  }

  setErroWidget(item) {
    this.setState({
      widgets: [
        {type: 'danger', value: '22.345', display: 'NFS-e Internalizadas no Mês'},
        {type: 'danger', value: '62', display: 'Notas pendentes p/h'},
        {type: 'success', value: '4.5%', display: 'Notas em contingência'},
        {type: 'info', value: '44ms', display: 'Comunicação Sefaz'}
      ]
    })
  }

  componentDidMount() {
    this.state.countdown = setInterval(this.timer, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.state.countdown);
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
        {type: statusPen, value: notasPen, display: 'Notas pendentes p/h'},
        {type: statusSefz, value: timeSefaz + 'ms', display: 'Comunicação Sefaz'},
        {type: statusCont, value: notasCont + '%', display: 'Notas em contingência'},
        {type: 'info', value: '22.345', display: 'NFS-e Internalizadas no Mês'}
      ]
    })
  }

  setFullState(s) {
    this.setState({isFull: s})
    if (s) {
      $('body').addClass('sidebar-open sidebar-collapse container-full')
    } else {
      $('body').removeClass('sidebar-open sidebar-collapse container-full')
    }
  }

  render() {
    return (
      <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setFullState(isFull)}>
        <div className="wrapper">
          <Navbar widgetsAction={this.setErroWidget} actionFullscreen={this.goFull}/>
          <Sidebar/>
          <Dashboard widgets={this.state.widgets} breadcumbs={this.state.breadcumbs} title={this.state.title}/>
          <Footer/>
        </div>
      </Fullscreen>
    )
  }
}