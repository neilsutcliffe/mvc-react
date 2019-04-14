import React from 'react'
import Layout from './Layout';

export default (exception) => <Layout><h1>500 Error</h1><div>{exception.error}</div></Layout>

