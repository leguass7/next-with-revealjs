import React from 'react'
import PropTypes from 'prop-types'

export default function Section({ children, ...rest }) {
  return <section {...rest}>{children}</section>
}

Section.propTypes = {
  children: PropTypes.any
}

Section.defaultProps = {
  children: null
}
