import React from 'react'

import favicon from '../../../images/favicon.png'

export default () => {

  return (
    <a href="#" className="brand-link">
      <img src={favicon} className="brand-image"/>
      <span className="brand-text font-weight-light">ELDOC Analytcs</span>
    </a>
  )
}
