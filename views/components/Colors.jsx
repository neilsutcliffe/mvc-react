var React = require('react');
import classNames from 'classnames'
import s from './Colors.module.scss'

export default ({ colors }) => {
  return (
    <div className={classNames("full four-fifth-1000", s.container)} >
      <h3>Colors Here</h3>
      <ul>
        {colors.map(color => <li key={colors}>{color}</li>)}
      </ul>
    </div>
  )
}