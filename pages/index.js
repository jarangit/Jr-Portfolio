import Layout from '../Component/Layout/Layout'
import BoxItemHomePage from '../Component/Box/BoxItemHomePage'
import Header from '../Component/Layout/Header'


const Index = ({data}) => {
  console.log(data)
  return(
    <Layout>
      <div>
        <Header data = {data}  />
        {/* <BoxItemHomePage/> */}
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