import Link from "next/link"
import styled from 'styled-components'
import axios from "axios"
import { useEffect, useState } from 'react'

const BoxItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
    max-width: 1280px;
    margin: 100px auto;
    a{
        text-decoration: none;
        margin: 10px;
        color: black;
        div{
            img{
                width: 400px;
                border-radius: 0.5em;
            }
        }
    }
`
const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
`
const Text = styled.div`
    position: absolute;
    bottom: 70%;
    left: 10%;
    text-align: left;
`
const BoxItemHomePage = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    console.log(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/19FRxx9U84yu81DHMFaVxE?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
      useEffect(() => {
          axios.get(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/1dpD4I7KVFDQSBWOdy4J5A?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
              .then(res => {
                setData(res.data);
                  setLoad(true);
              })
              .catch(err => {
                  setError('No Data');
                  setLoad(true)
              })
      }, []);

      console.log(data)

    return(
        <BoxItem>
             <Link href = "/MyProject" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY PROJECT </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/59r1jGdXAvPzCoQhv9IbXX/2e6debdaafd0248bdb14deaf732628f8/18084.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyBook" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY BOOK </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/u3nhWzqPaoGjvalZhAK1u/07696cdb8650b59e763587d6297d0e4d/1044.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyGallery" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY GALLERY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/2ov8cZE4mZTmiE0ibNGz0j/335ff11806dda9293df079353e91b94e/561147-PKT15J-161.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MySong" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY SONG </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/19FRxx9U84yu81DHMFaVxE/d4336808b6b65accf848d1e730d89e72/615.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyActivity" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY ACTIVITY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/NM4TOaTzbkmtG9iU2ESOt/bf3c440cf19a6d2c91fcabebcf6ef9cc/20727.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
                    <a href = "https://www.abk-store.com/" target = "bank">
                       <Container>
                            <Text>
                                <h1> MY BUSINESS </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/bpFhwXWIjI2DhPGU1AlZi/033c19c90a326bed35956f32aa18dc68/799.jpg" width='100%'/>
                       </Container>
                    </a>
        </BoxItem>
    )
}

export default BoxItemHomePage