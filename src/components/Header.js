import React from 'react'
import { Link } from 'gatsby'
import { Header, H1, H2 } from 'styled-system-html'

export default (props) => (
  <>{
    props.path === '/' ? (
      <Header textAlign="center" pb={4}>
        <H1 pb={2} mb={2}>{props.title}</H1>
        <H2 fontSize={2} fontWeight="normal">{props.description}</H2>
      </Header>
    ) : (
      <Header borderBottom="solid 2px" borderColor="gray2" textAlign="center" pt={2} pb={4} mb={4} fontSize={1}>
        <H1 fontSize={2} pb={2}>{props.title}</H1>
        <Link to={`/`}>view all events</Link>
      </Header>
    )
  }</>
)
