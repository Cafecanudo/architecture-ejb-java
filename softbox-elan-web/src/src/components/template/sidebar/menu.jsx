import React, { Component } from 'react'

export default class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuario: props.usuario,
      menus: [
        {
          icon: 'dashboard', display: 'Dashboard', open: true,
          menus: [
            { url: '/Resumo', icon: 'line-chart', display: 'Resumo' },
            { url: '/Resumo', icon: 'area-chart', display: 'Contingência' },
            { url: '/Resumo', icon: 'bar-chart', display: 'Notas Divegentes' }
          ]
        },
        {
          url: '/settings', icon: 'television', display: 'Modo Monitor'
        }
      ]
    }
  }

  componentDidMount() {
    $('.nav-sidebar .has-treeview .nav-link').click(function () {
      if ($(this).parent().hasClass('menu-open')) {
        $(this).removeClass('active').parent().removeClass('menu-open').css({ height: 40 });
      } else {
        $(this).addClass('active').parent().addClass('menu-open')
          .css({ height: ($(this).parent().height() + $(this).next().height() + 5) })
      }
    })
  }

  loadMenus() {
    return this.state.menus.map((_it, i) => (
      <li key={i} className="nav-item has-treeview">
        <a href={_it.url || '#'} className="nav-link">
          <i className={'nav-icon fa fa-' + _it.icon}></i>
          <p>
            {_it.display}
            {_it.menus ? <i className="right fa fa-angle-left"></i> : null}
          </p>
        </a>
        {_it.menus ? <ul className="nav nav-treeview">
          {this.loadMenusSub(_it.menus || [])}
        </ul> : null}
      </li>
    ))
  }

  loadMenusSub(children) {
    return children.map((_c, i) => (
      <li key={i} className="nav-item">
        <a href={'#' + _c.url} className="nav-link">
          <i className={'fa fa-' + _c.icon + ' nav-icon'}></i>
          <p>{_c.display}</p>
        </a>
      </li>
    ))
  }

  render() {
    return (
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
          data-accordion="false">
          {this.loadMenus()}

          <li className="nav-header">Configurações</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fa fa-sliders"></i>
                <p>Geral</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fa fa-bar-chart"></i>
                <p>Graficos</p>
            </a>
          </li>
          {/*<li className="nav-item has-treeview menu-open">


            <a href="#" className="nav-link active">
              <i className="nav-icon fa fa-dashboard"></i>
              <p>
                Dashboards
                <i className="right fa fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <i className="fa fa-circle-o nav-icon"></i>
                  <p>Resumo</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-circle-o nav-icon"></i>
                  <p>Notas</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-circle-o nav-icon"></i>
                  <p>Transmissões</p>
                </a>
              </li>
            </ul>
          </li>*/}
        </ul>
      </nav>
    )
  }
}
