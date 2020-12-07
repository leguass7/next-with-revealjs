import React, { useRef, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import RevealJS from './revealjs'

import RevealProvider from './RevealContext'
let deck = false

export default function RevealMain({ children }) {
  const revealRef = useRef(null)

  const getDeck = useMemo(() => deck, [])
  const getRefDom = useCallback(() => {
    return revealRef.current
  }, [revealRef])

  useEffect(() => {
    if (!deck && revealRef.current) {
      deck = new RevealJS(revealRef.current)
      deck
        .initialize({
          controls: false,
          progress: true,
          history: true,
          center: true,
          transition: 'slide'
        })
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('reveal.js is ready', revealRef.current)
        })
    }
  }, [])

  return (
    <div
      ref={revealRef}
      className="reveal"
      style={{
        position: 'relative',
        height: '100vh'
      }}
    >
      <RevealProvider.Provider value={{ getRefDom, getDeck }}>{children}</RevealProvider.Provider>
    </div>
  )
}

RevealMain.propTypes = {
  children: PropTypes.any
}

RevealMain.defaultProps = {
  children: null
}
