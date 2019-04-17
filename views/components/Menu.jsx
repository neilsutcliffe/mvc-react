import React from 'react'
import s from './Menu.module.scss'

const Brand = ({ brand }) => {
  return <li>{brand.DisplayName}</li>
}

export default (props) => {
  const { brands } = props;
  return (
    <div className="full fifth-1000">
      <h3>Brands</h3>
      <ul className={s.brandList}>
        {brands.map(brand => <Brand key={brands.indexOf(brand)} brand={brand} />)}
      </ul>
    </div>
  )
}
