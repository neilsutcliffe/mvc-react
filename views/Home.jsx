import React from 'react'
import Menu from './components/Menu'
import Colors from './components/Colors'
import Layout from './Layout'

const colors = ['pink', 'red']

const Home = (props, context) => {
  const { brands } = props;
  return (
    <Layout>
      <Menu brands={brands} />
      <h1>Select a Brand</h1>
    </Layout>
  )
}

export default Home