var React = require('react');

export default ({ colors }) => {
  return (
    <>
      <h3>Colors</h3>
      <ul>
        {colors.map(brand => <li key={colors}>{colors}</li>)}
      </ul>
    </>
  )
}