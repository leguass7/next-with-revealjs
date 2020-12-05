/* eslint-disable react/prop-types */
import '../components/revealjs/css/reveal.css'
import '../components/revealjs/css/theme/white.css'

import ThemeContainer from '../components/ThemeContainer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
