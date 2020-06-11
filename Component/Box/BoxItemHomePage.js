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
                            <img src="//images.ctfassets.net/mhf3i20liehl/1dpD4I7KVFDQSBWOdy4J5A/8d0ba47a353e90651be8e97aa3ab9cf5/_________________________________________0150.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyBook" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY BOOK </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/1dpD4I7KVFDQSBWOdy4J5A/8d0ba47a353e90651be8e97aa3ab9cf5/_________________________________________0150.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyGallery" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY GALLERY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/1dpD4I7KVFDQSBWOdy4J5A/8d0ba47a353e90651be8e97aa3ab9cf5/_________________________________________0150.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MySong" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY SONG </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/1dpD4I7KVFDQSBWOdy4J5A/8d0ba47a353e90651be8e97aa3ab9cf5/_________________________________________0150.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyActivity" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY ACTIVITY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/1dpD4I7KVFDQSBWOdy4J5A/8d0ba47a353e90651be8e97aa3ab9cf5/_________________________________________0150.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
                    <a href = "https://www.abk-store.com/" target = "bank">
                       <Container>
                            <Text>
                                <h1> MY BUSINESS </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/1dpD4I7KVFDQSBWOdy4J5A/8d0ba47a353e90651be8e97aa3ab9cf5/_________________________________________0150.jpg" width='100%'/>
                       </Container>
                    </a>
        </BoxItem>
    )
}

export default BoxItemHomePage