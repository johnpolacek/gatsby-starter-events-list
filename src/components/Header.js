import React from 'react'
import { Link } from 'gatsby'
import { Header, H1, H2 } from 'styled-system-html'
import LinkButton from './LinkButton'

export default props => (
  <Header textAlign="center" p={[4,5]}>
    <H1 p={2} mb={2}>
      {props.title}
    </H1>
    { props.path === '/' || props.path === '/past' ? (
      <H2 fontSize={2} fontWeight="normal">
        {props.description}
      </H2>
    ) : (
      <Link to={`/`}>
        <LinkButton>VIEW ALL EVENTS</LinkButton>
      </Link>
    )}
  </Header>
)
