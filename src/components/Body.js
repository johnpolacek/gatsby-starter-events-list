import React from 'react'
import { Div } from 'styled-system-html'
import theme from '../theme'

export default props => (
  <Div bg="lite" fontFamily={theme.font}>
    <Div minHeight="100vh">
      {props.children}
    </Div>
  </Div>
)
