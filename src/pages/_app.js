/* eslint-disable react/prop-types */
import '../components/Reveal/revealjs/css/reveal.css'
import '../components/Reveal/revealjs/css/theme/white.css'

import ThemeContainer from '../components/ThemeContainer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
