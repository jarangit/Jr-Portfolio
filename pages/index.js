import Link from 'next/link'
import Layout from '../Component/Layout/Layout'
import BoxItemHomePage from '../Component/Box/BoxItemHomePage'
import { useEffect, useState } from 'react'
<<<<<<< HEAD


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

=======
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


>>>>>>> 299b8553636a6c682a5a7a623f9facfd4181eb7b
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