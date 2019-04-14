var React = require('react');

export default ({ colors }) => {
  return (
    <div className="full four-fifth-1000">
      <h3>Colors</h3>
      <ul>
        {colors.map(color => <li key={colors}>{color}</li>)}
      </ul>
    </div>
  )
}