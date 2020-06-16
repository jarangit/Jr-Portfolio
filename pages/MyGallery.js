import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import ShowImageGallery from "../Component/MyGallery/ShowImage/ShowImageGallery";
import ListAlbum from "../Component/MyGallery/ShowImage/ListAlbum";



function MyGallery({ data }) {
  console.log(data)
    return (
      <Layout>
       <div className = "container">
         <h1>MY GALLERY</h1>
              <ListAlbum data = {data} />
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