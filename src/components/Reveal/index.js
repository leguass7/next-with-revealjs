import React, { useState, useRef, useEffect } from 'react'
import RevealJS from '../revealjs'

let deck = false

export default function Reveal() {
  const revealRef = useRef(null)

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
        border: '1px solid #F00',
        height: '100vh'
      }}
    >
      <div className="slides">
        <section>
          <h1>Reveal.js</h1>
          <h3>The HTML Presentation Framework</h3>
          <p>
            <small>
              Created by <a href="http://hakim.se">Hakim El Hattab</a> /{' '}
              <a href="http://twitter.com/hakimel">@hakimel</a>
            </small>
          </p>
        </section>

        <section>
          <h2>Hello There</h2>
          <p>
            reveal.js enables you to create beautiful interactive slide decks using HTML. This
            presentation will show you examples of what it can do.
          </p>
        </section>

        <section>
          <section>
            <h2>Vertical Slides</h2>
            <p>Slides can be nested inside of each other.</p>
            <p>
              Use the <em>Space</em> key to navigate through all slides.
            </p>
            <br />
            <a href="#" className="navigate-down">
              <img
                width="178"
                height="238"
                data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png"
                alt="Down arrow"
              />
            </a>
          </section>
          <section>
            <h2>Basement Level 1</h2>
            <p>
              Nested slides are useful for adding additional detail underneath a high level
              horizontal slide.
            </p>
          </section>
          <section>
            <h2>Basement Level 2</h2>
            <p>Thats it, time to go back up.</p>
            <br />
            <a href="#/2">
              <img
                width="178"
                height="238"
                data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png"
                alt="Up arrow"
                style={{ transform: 'rotate(180deg); -webkit-transform: rotate(180deg);' }}
              />
            </a>
          </section>
        </section>
      </div>
    </div>
  )
}
