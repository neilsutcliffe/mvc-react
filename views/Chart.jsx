import React from 'react'
import Menu from './components/Menu'
import Colors from './components/Colors'
import Layout from './Layout'

const colors = ['pink', 'red']

const Chart = (props, context) => {
  const { brands, colors, brand } = props;
  return (
    <Layout>
      <Menu brands={brands} />
      <Colors colors={colors} title={brand.DisplayName} />
    </Layout>
  )
}

export default Chart