import Link from 'next/link'
import Layout from '../Component/Layout/Layout'
import BoxItemHomePage from '../Component/Box/BoxItemHomePage'
import { useEffect, useState } from 'react'


const client = require('contentful').createClient({
  space: "mhf3i20liehl",
  accessToken: "EL8m-NzvxIwV3PlUd14_xYOrxihJuii6ONKvcJgIPCw"
})

// client.getEntry('mySet')
// .then(function (entry) {
//   // logs the entry metadata
//   console.log(entry.sys)

//   // logs the field with ID title
// })
const Index = () => {
  // Index.getInitialProps = async (ctx) => {
  //   const res = await fetch('https://cdn.contentful.com/spaces/mhf3i20liehl/entries?access_token=EL8m-NzvxIwV3PlUd14_xYOrxihJuii6ONKvcJgIPCw&content_type=mySet')
  //   const json = await res.json()
  //   return { stars: json.stargazers_count }
  // }
  // console.log(stars)
  
client.getEntry('mySet')
.then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys)

  // logs the field with ID title
})

  return(
    <Layout>
     <BoxItemHomePage/>
    </Layout>
  )
}

export default Index