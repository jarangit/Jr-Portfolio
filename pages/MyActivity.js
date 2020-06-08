import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import ListItemMyAc from '../Component/MyActivity/ListItem'

const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  img{
    width: 200px;
    vertical-align: middle;

  }
`
function MyActivity({ data }) {
    return (
      <Layout>
          <div className ="container" >
              <ListItemMyAc data = {data}/>
          </div>
      </Layout>
    )
  }
  MyActivity.getInitialProps = async (ctx) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=myActivity`)
    const json = await res.json()
    return { data: json}
  }
  
  export default MyActivity