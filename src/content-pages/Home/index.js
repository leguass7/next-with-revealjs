import React from 'react'

import { RevealMain, Slides, Section } from '../../components/Reveal'

import FirstContent from './First'
import HelloThere from './HelloThere'

export default function PageHome() {
  return (
    <RevealMain>
      <Slides>
        <Section id="initial">
          <FirstContent />
        </Section>
        <Section id="hello-there">
          <HelloThere />
        </Section>
      </Slides>
    </RevealMain>
  )
}
