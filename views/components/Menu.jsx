var React = require('react');

export default (props) => {
  const { brands } = props;
  return (
    <>
      <h3>Brands</h3>
      <ul>
        {brands.map(brand => <li key={brand}>{brand}</li>)}
      </ul>
    </>
  )
}