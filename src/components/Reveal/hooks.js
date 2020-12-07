import { useContext, useMemo, useState, useEffect } from 'react'

import { RevealContext } from '../../components/Reveal'

const defaultState = {
  progress: 0,
  indices: {}
}

export function useRevealDeck() {
  const [state, setState] = useState(defaultState)

  const { getDeck, isReady, getInitialIndices } = useContext(RevealContext)

  const deck = useMemo(() => isReady() && getDeck(), [isReady, getDeck])

  useEffect(() => {
    const slidetransitionend = event => {
      setState({
        progress: deck.getProgress(),
        indices: {
          currentSlide: event.currentSlide,
          indexh: event.indexh,
          indexv: event.indexv
        }
      })
    }

    if (deck) {
      deck.on('slidetransitionend', slidetransitionend)
      if (!state.indices || (state.indices && !state.indices.currentSlide)) {
        setState(old => {
          return {
            ...old,
            indices: getInitialIndices()
          }
        })
      }
    }
    return () => {
      if (deck) {
        // deck.off('slidechanged', slidechanged)
        deck.off('slidetransitionend', slidetransitionend)
      }
    }
  }, [deck, state, getInitialIndices])

  return [deck, state]
}
