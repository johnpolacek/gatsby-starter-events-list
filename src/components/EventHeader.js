import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { H2, H3 } from 'styled-system-html'

const EventHeader = props => (
  <>
    { props.url ? (
      <H3 fontSize={[3, 4]} borderBottom="solid 1px" borderColor="gray2" mb={1}>
        <Link to={props.url}>{props.title}</Link>
      </H3>
    ) : (
      <H2 color="base" fontSize={[3, 4]} borderBottom="solid 1px" borderColor="gray2" mb={1}>
        {props.title}
      </H2>
    )}
  </>
)

EventHeader.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default EventHeader
