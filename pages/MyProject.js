import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import Link from 'next/link'
import ShowImage from "../Component/ShowImage";


const Block = styled.div`
    div{
        /* width: 100%; */
        ul{
            margin: 0;
        }
        img{
            width:100%;
            margin: 0 auto;

        }
    }
`

const MyProject = ({data}) => {
    console.log(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/NyD1Y3lSNMwtKPdv96pwB?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
    return(
        <Layout>
           <div className = "container" >
                    {data.items.map(items => {
                        return(
                                    <a href = {items.fields.url} target = "bank">
                                        <Block className="card">
                                            <div>
                                                <ShowImage  assetsId = {items.fields.image.sys.id}/>
                                            </div>
                                            <div>
                                                <h2> {items.fields.name} </h2>
                                                <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.descriptions)}}></div>        
                                                <div>
                                                    <h3>Tools</h3>
                                                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.tools)}}></div>
                                                </div>
                                                <a href = {items.fields.url} target = "bank"> URL : {items.fields.url} </a>
                                            </div>
                                        </Block>
                                    </a>
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