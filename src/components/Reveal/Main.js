import React, { useRef, useEffect, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import RevealJS from './revealjs'

import RevealProvider from './RevealContext'
let deck = false

export default function RevealMain({ children }) {
  const revealRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [initialIndices, setInitialIndices] = useState({})

  const getDeck = useCallback(() => deck, [])
  const isReady = useCallback(() => !!(ready && deck), [ready])

  const getInitialIndices = useCallback(() => {
    return initialIndices
  }, [initialIndices])

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
        .then(e => {
          setInitialIndices({
            currentSlide: e.currentSlide,
            indexh: e.indexh,
            indexv: e.indexv
          })
          setReady(true)
        })
    }
  }, [])

  return (
    <div
      ref={revealRef}
      className="reveal"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '100%'
      }}
    >
      <RevealProvider.Provider value={{ getDeck, isReady, getInitialIndices }}>
        {children}
      </RevealProvider.Provider>
    </div>
  )
}

RevealMain.propTypes = {
  children: PropTypes.any
}

RevealMain.defaultProps = {
  children: null
}
