import React from 'react'
import { Span } from 'styled-system-html'

const LinkButton = props => (
  <Span
    bg="base"
    color="white"
    px={3}
    py={2}
    borderRadius="4px"
    {...props}
  />
)

export default LinkButton
