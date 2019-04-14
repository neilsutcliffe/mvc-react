var React = require('react');

export default ({ colors }) => {
  return (
    <>
      <h3>Colors</h3>
      <ul>
        {colors.map(color => <li key={colors}>{color}</li>)}
      </ul>
    </>
  )
}