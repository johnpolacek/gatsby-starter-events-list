import React from 'react'
import PropTypes from 'prop-types'
import { P } from 'styled-system-html'

const toAmPm = time =>
  (parseInt(time.split(':')[0]) % 12) +
  (time.split(':')[1] !== '00' && ':' + time.split(':')[1]) +
  (parseInt(time.split(':')[0]) < 12 ? 'am' : 'pm')

const EventDate = props => (
  <>
    {props.startDate !== props.endDate ? (
      <P color="gray7" fontStyle="italic" fontSize={0} mb={2}>
        {props.startDate}{' '}
        {props.startTime ? 'at ' + toAmPm(props.startTime) : ''} to{' '}
        {props.endDate} {props.endTime ? 'at ' + toAmPm(props.endTime) : ''}
      </P>
    ) : (
      <P color="gray7" fontStyle="italic" fontSize={0} mb={2}>
        {props.startDate}{' '}
        {props.startTime ? ' – ' + toAmPm(props.startTime) : ''}
        {props.endTime && props.endTime ? ' to ' + toAmPm(props.endTime) : ''}
      </P>
    )}
  </>
)

EventDate.propTypes = {
  startDate: PropTypes.string,
  startTime: PropTypes.string,
  endDate: PropTypes.string,
  endTime: PropTypes.string,
}

export default EventDate
