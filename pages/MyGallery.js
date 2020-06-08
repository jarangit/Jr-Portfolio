import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import ShowImageGallery from "../Component/Layout/ShowImage/ShowImageGallery";


const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  img{
    width: 200px;
    vertical-align: middle;

  }
`
function MyGallery({ data }) {
    return (
      <Layout>
       <div className = "container">
        {data.items.map(items => {
            return(
              <div key = {items.fields.name}>
              <h2> {items.fields.name} </h2>
                   <Block>
                     <ShowImageGallery dataImg = {items.fields}/>
                  </Block>
              </div>
            )
          })}
       </div>
      </Layout>
    )
  }
  MyGallery.getInitialProps = async (ctx) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post`)
    const json = await res.json()
    return { data: json}
  }
  
  export default MyGallery