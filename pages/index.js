import Link from 'next/link'
import Layout from '../Component/Layout/Layout'
import BoxItemHomePage from '../Component/Box/BoxItemHomePage'
import { useEffect, useState } from 'react'
import Header from '../Component/Layout/Header'
import Navbar from '../Component/Layout/Navbar'

// const client = require('contentful').createClient({
//   space: 'mhf3i20liehl',
//   accessToken: 'EL8m-NzvxIwV3PlUd14_xYOrxihJuii6ONKvcJgIPCw'
// })

const Index = ({data}) => {
  console.log(data)
  return(
    <Layout  >
      <Header data = {data} />
      <Navbar/>
      <BoxItemHomePage data = {data}/>
    </Layout>
  )
}
Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=media`)
  const json = await res.json()
  return { data: json}
}

export default Index