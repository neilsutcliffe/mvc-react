import React from 'react'
import Menu from './components/Menu'
import Colors from './components/Colors'
import Layout from './Layout'

const colors = ['pink', 'red']

const Home = (props, context) => {
  const { brands } = props;
  console.log(brands);
  return (
    <Layout>
      <Menu brands={brands} />
      <Colors colors={colors} />
    </Layout>
  )
}

export default Home