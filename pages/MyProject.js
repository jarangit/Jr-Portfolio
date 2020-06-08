import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import Link from 'next/link'
import ShowImage from "../Component/ShowImage";


const Block = styled.div`
    display: flex;
    border: 1px solid;
    margin-bottom: 20px;
    padding: 20px;
    justify-content: center;
    div{
        width: 400px;
        img{
            width:300px;
        }
    }
`

const MyProject = ({data}) => {
    console.log(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
    return(
        <Layout>
           <div className = "container" >
                    {data.items.map(items => {
                        return(
                            <Block>
                                    <div>
                                         <ShowImage  assetsId = {items.fields.image.sys.id}/>
                                    </div>
                                    <div>
                                        <h2> {items.fields.name} </h2>
                                        <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.descriptions)}}></div>         
                                        <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.tools)}}></div>
                                        <a href = {items.fields.url} target = "bank"> {items.fields.url} </a>
                                    </div>
                            </Block>
                        )
                    })}
           </div>
        </Layout>
    )
}


MyProject.getInitialProps = async (ctx) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
    const json = await res.json()
    return { data: json}
  }
export default MyProject