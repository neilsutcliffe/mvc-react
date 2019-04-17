var React = require('react');
import classNames from 'classnames'
import s from './Colors.module.scss'


const Color = ({ color }) =>
  <li>
    <div classname={s.swatch}>
    </div>
    <h3>{color.Name}</h3>
    <h4>Pigments</h4>
    <ul>
      {color.Pigments.map((pigment) => <li>{pigment}</li>)}
    </ul>
  </li>


export default ({ colors, title }) => {
  return (
    <div className={classNames("full four-fifth-1000", s.container)} >
      <h3>{title}</h3>
      <ul>
        {colors.map(color => <Color key={color.ColorId} color={color} />)}
      </ul>
    </div>
  )
}