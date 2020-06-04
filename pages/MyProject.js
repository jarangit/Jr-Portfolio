import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import Link from 'next/link'
import ShowImage from "../Component/ShowImage";


const Block = styled.div`
    border: solid;
    margin: 20px 0;
    img{
        width: 200px;
    }
`

const MyProject = ({data}) => {
    console.log(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
    return(
        <Layout>
           <div className = "container" >
                <div>
                    {data.items.map(items => {
                        // console.log(items.fields.image.sys.id)
                        return(
                            <Block>
                                <h3> {items.fields.name} </h3>
                                <ShowImage  assetsId = {items.fields.image.sys.id}/>
                                <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.descriptions)}}></div>           
                                <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.tools)}}></div>
                                <a href = {items.fields.url} target = "bank"> {items.fields.url} </a>
                            </Block>
                        )
                    })}
                </div>
           </div>
        </Layout>
    )
}

// MyProject.getInitialProps = async (ctx) => {
//     const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
//     const json = await res.json()
//     console.log(json)
//     return { urlImg: json}
// }

MyProject.getInitialProps = async (ctx) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
    const json = await res.json()
    return { data: json}
  }
export default MyProject