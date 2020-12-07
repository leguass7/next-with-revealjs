import React from 'react'
import PropTypes from 'prop-types'

export default function Slides({ children }) {
  return (
    <>
      <div className="slides">{children}</div>
    </>
  )
}

Slides.propTypes = {
  children: PropTypes.any
}

Slides.defaultProps = {
  children: null
}
