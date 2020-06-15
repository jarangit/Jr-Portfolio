import Layout from '../Component/Layout/Layout'
import BoxItemHomePage from '../Component/Box/BoxItemHomePage'
import Header from '../Component/Layout/Header'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
// const client = require('contentful').createClient({
//   space: 'mhf3i20liehl',
//   accessToken: 'EL8m-NzvxIwV3PlUd14_xYOrxihJuii6ONKvcJgIPCw'
// })


const Index = ({data}) => {
  console.log(data)
  return(
    <Layout>
      <div>
        <Header data = {data} />
        <BoxItemHomePage data = {data}/>
      </div>
    </Layout>
  )
}
Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=media`)
  const json = await res.json()
  return { data: json}
}

export default Index