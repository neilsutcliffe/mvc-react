var React = require('react');

export default (props) => {
  const { brands } = props;
  return (
    <div className="full fifth-1000">
      <h3>Brands</h3>
      <ul>
        {brands.map(brand => <li key={brand}>{brand}</li>)}
      </ul>
    </div>
  )
}