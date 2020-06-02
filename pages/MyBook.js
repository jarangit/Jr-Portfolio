import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import Link from 'next/link'


//styled
const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`
const BlockContent = styled.div`
    border-style: solid;
    border-radius: 0.5rem;
    margin: 10px 0;
    padding: 20px;
`
const Block = styled.div`
    a{
        color:black;
        text-decoration: none;
    }
`
//end styed


const MyBook = ({data}) => {
    MyBook.getInitialProps = async (ctx) => {
        const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=mySet`)
        const json = await res.json()
        return { data: json}
      }
    console.log(data)
    return(
        <Layout>
            <Container>
       {data.items.map(items => {
         console.log(items.fields.title)
         return(
        <Block>
             <Link href = "/">
               <a>
               <BlockContent>
                    <h2> {items.fields.title} </h2>
                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.contents)}}></div>           
                </BlockContent>
               </a>
            </Link>
        </Block>
         )
       })}
            </Container>
        </Layout>
    )
}

export default MyBook