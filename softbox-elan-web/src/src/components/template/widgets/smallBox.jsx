import React from 'react'

export default props => {

  const minimize = (e) => {
    $(e.target)
      .closest('.col*')
      .toggleClass('small-box-close')
    $(e.target).closest('.small-box').click(function () {
      $(this).unbind('click')
        .closest('.col*').toggleClass('small-box-close')
    })
  }

  return (
    <div className={"small-box bg-" + props.item.type}>
      <div className="card-tools">
        <button type="button" className="btn btn-tool" onClick={(e) => minimize(e)}>
          <i className="fa fa-minus"></i>
        </button>
      </div>
      <div className="inner">
        <h3>{props.item.value}</h3>
        <p>{props.item.display}</p>
      </div>
      <div className="icon">
        <i className="ion ion-bag"></i>
      </div>
      <a href="#" className="small-box-footer" onClick={props.item.action}>
        Mais
        <i className="fa fa-arrow-circle-right"></i>
      </a>
    </div>
  )
}