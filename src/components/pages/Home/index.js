import React from 'react'

import { RevealMain, Slides, Section } from '../../Reveal'

import FirstContent from '../Home/First'
import HelloThere from '../Home/HelloThere'

export default function PageHome() {
  return (
    <RevealMain>
      <Slides>
        <Section>
          <FirstContent />
        </Section>
        <Section>
          <HelloThere />
        </Section>
      </Slides>
    </RevealMain>
  )
}
