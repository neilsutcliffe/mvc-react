import React from 'react'
import Menu from './components/Menu'
import Colors from './components/Colors'
import Layout from './Layout'

import s from './Home.module.scss'

const colors = ['pink', 'red']

const Home = (props, context) => {
  const { brands } = props;
  console.log(brands);
  return (
    <>
      <Layout>
        <div className={s.container}>
          <Menu brands={brands} />
          <Colors colors={colors} />
        </div>
      </Layout>
    </>
  )
}

export default Home