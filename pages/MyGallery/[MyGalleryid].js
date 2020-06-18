import Layout from "../../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import ListItemMyAc from '../../Component/MyActivity/ListItem'
import ShowImage from '../../Component/MyGallery/ShowImage/ShowImageGallery'

const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  img{
    width: 200px;
    vertical-align: middle;

  }
`
const BoxImg = styled.div`
    width: 300px;
    height: auto;
    margin: 5px;
`

const SectionImg = styled.div`
    display:flex;
    flex-wrap:wrap;
`
function MyGalleryId(props) {
    console.log(props.data.fields)
    const { name, descriptions, col1} = props.data.fields
    return (
      <Layout>
          <div className ="container" >
                 <h1> {name} </h1>
                 <p> {descriptions} </p>
                 <SectionImg>
                   {col1.map(idCol1 => {
                     return (
                       <BoxImg>
                         <ShowImage col1 ={idCol1.sys.id} />
                       </BoxImg>
                     )
                   })}
                 </SectionImg>
          </div>
      </Layout>
    )
  }

  export const getStaticPaths = async () => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post`)
    const data = await res.json()
    const paths = data.items.map((items) => ({
        params: {
            MyGalleryid : items.sys.id
        }
    }))
    console.log('jar')
    return {
        paths,
        fallback: false
    }
  }

  export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post`)
    const datas = await res.json()
    const data = datas.items.find((items) => items.sys.id === params.MyGalleryid)
    return{
        props: {data},
    }
  }
  
  
  export default MyGalleryId