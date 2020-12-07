import React from 'react'

import { RevealMain, Slides, Section } from '../../components/Reveal'

import FirstContent from './First'
import HelloThere from './HelloThere'

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
