import PropTypes from 'prop-types'
import { ThemeProvider as StyledProvider } from 'styled-components'

import GlobalStyle from '../../styles/global'

export default function ThemeContainer({ children }) {
  return (
    <StyledProvider theme={{}}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  )
}

ThemeContainer.propTypes = {
  children: PropTypes.any
}

ThemeContainer.defaultProps = {
  children: null
}
