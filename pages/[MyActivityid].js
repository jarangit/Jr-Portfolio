import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import ListItemMyAc from '../Component/MyActivity/ListItem'
import ShowImgMyAc from '../Component/MyActivity/ShowImgMyAc'

const Block = styled.div`
   
  img{
    width: 100%;
  }
`
function MyActivityId(props) {
    console.log(props.data)
    const { title, descriptions, date,gallery } = props.data.fields
    return (
      <Layout>
          <Block className ="container" >
              <h3> {title} </h3>
              <div dangerouslySetInnerHTML={{__html: documentToHtmlString(descriptions)}}></div>
              <p> {date} </p> 
              {/* {gallery.map(idImg => {
                return(
                  <ShowImgMyAc data = {idImg.sys.id}/>
                )
              })}       */}
          </Block>
      </Layout>
    )
  }

  export const getStaticPaths = async () => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=myActivity`)
    const data = await res.json()
    const paths = data.items.map((items) => ({
        params: {
            MyActivityid : items.sys.id
        }
    }))
    return {
        paths,
        fallback: false
    }
  }

  export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=myActivity`)
    const datas = await res.json()
    const data = datas.items.find((items) => items.sys.id === params.MyActivityid)
    return{
        props: {data},
    }
  }
  
  
  export default MyActivityId