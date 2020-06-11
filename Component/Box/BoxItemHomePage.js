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
`
const Text = styled.div`
    position: absolute;
    bottom: 70%;
    left: 10%;
    text-align: left;
    color: white;
`
const BoxItemHomePage = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    console.log(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/5FuZD0jTQjr1oukdZwVtk5?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
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
                            <img src="//images.ctfassets.net/mhf3i20liehl/47hetfU3UDalOB6JyBviUw/e68777d25eaf76d8aca60039feb499af/18084.png" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyBook" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY BOOK </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/ci8PNQIV1MCedwTS40sIq/caa7349af2b48675a07b2ac7160a3a1c/1044.png" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyGallery" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY GALLERY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/3uh0h5hqXI1LHhmaLZwmE7/962471a031bd585bfc202cf1c82a3b08/561147-PKT15J-161.png" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MySong" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY SONG </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/1zv8VprnhfGmyeD4n12eaW/7c5b10e962a07807828b7c2d87bd4f89/615.png" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyActivity" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY ACTIVITY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/3udibrD7F8gROFp7yJHsEL/7f562add9dc3d9269e3665e016ac8de7/19694.png" width='100%'/>
                       </Container>
                    </a>
             </Link>
                    <a href = "https://www.abk-store.com/" target = "bank">
                       <Container>
                            <Text>
                                <h1> MY BUSINESS </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/5FuZD0jTQjr1oukdZwVtk5/8f9eafbfaa999b3c59a03d9e3f9bc31c/799.png" width='100%'/>
                       </Container>
                    </a>
        </BoxItem>
    )
}

export default BoxItemHomePage