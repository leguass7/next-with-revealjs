import React, { useCallback } from 'react'
import { useRevealDeck } from '../../components/Reveal'

export default function First() {
  const [Deck, { progress }] = useRevealDeck()

  const handleClick = useCallback(() => {
    if (Deck) Deck.right()
  }, [Deck])
  return (
    <>
      <h1>First Reveal.js</h1>
      <h3>The HTML Presentation Framework</h3>
      <p>
        <small>
          Created by <a href="http://hakim.se">Hakim El Hattab</a> /{' '}
          <a href="http://twitter.com/hakimel">@hakimel</a>
        </small>
        <button onClick={handleClick}>PASSAR ({progress})</button>
      </p>
    </>
  )
}
