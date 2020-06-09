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
         <p>This example use media queries to re-arrange the images on different screen sizes: for screens larger than 700px wide, it will show four images side by side, for screens smaller than 700px, it will show two images side by side. For screens smaller than 500px, the images will stack vertically (100%).</p>
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