import Layout from "../Component/Layout/Layout"
import Link from "next/link"
import styled from 'styled-components'
import ShowImage from '../Component/ShowImage'


const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media all and (max-width: 900px){
    justify-content: center;
  }
`
const Contai = styled.div`
    width: 40%;
    position: relative;
    text-align: center;
    color: white;
    img{
      width: 100%;
    }
`
const Text = styled.div`
    position: absolute;
    bottom: 10%;
    left: 10%;
    text-align: left;
    @media all and (max-width: 900px){
      font-size: 50%;
      text-align:center;
      left: 30%;
  }
`

const MySong = ({data}) => {
  console.log(data)
  return(
    <Layout>
      <div className = "container">
        <Block>
            {data.items.map(items => {
              return(
               <Contai className = 'card'>
                  <a href = {items.fields.link} >
                    <ShowImage assetsId = {items.fields.thumbnail.sys.id}/>
                    {/* <Text>
                      <h2> {items.fields.name} </h2>
                    </Text> */}
                  </a>
               </Contai>
              )
            })}
        </Block>
      </div>
    </Layout>
  )
}
MySong.getInitialProps = async (ctx) => {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=mySong`)
  const json = await res.json()
  return { data: json}
}
export default MySong