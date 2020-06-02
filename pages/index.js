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

const Index = ({stars}) => {
  console.log(stars.items)

  // async function fetchEntries() {
  //   const entries = await client.getEntries()
  //   if (entries.items) return entries.items
  //   console.log(`Error getting Entries for ${contentType.name}.`)
  // }

  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   async function getPosts() {
  //     const allPosts = await fetchEntries()
  //     setPosts([...allPosts])
  //   }
  //   getPosts()
  // }, [])
  // const data = posts[1].fields
  // console.log(posts)


  return(
    <Layout  >
      <Header/>
      <Navbar/>
      <BoxItemHomePage/>
    </Layout>
  )
}
Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=mySet`)
  const json = await res.json()
  return { stars: json}
}

export default Index