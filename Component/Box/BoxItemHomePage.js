import Link from "next/link"
import styled from 'styled-components'

const BoxItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
    max-width: 1280px;
    margin: 0 auto;
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
    return(
        <BoxItem>
             <Link href = "/" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY PROJECT </h1>
                            </Text>
                            <img src="/Image/Header.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/MyBook" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY BOOK </h1>
                            </Text>
                            <img src="/Image/Header.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY GALLERY </h1>
                            </Text>
                            <img src="/Image/Header.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY SONG </h1>
                            </Text>
                            <img src="/Image/Header.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY ACTIVITY </h1>
                            </Text>
                            <img src="/Image/Header.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
             <Link href = "/" >
                    <a>
                       <Container>
                            <Text>
                                <h1> MY BUSINESS </h1>
                            </Text>
                            <img src="/Image/Header.jpg" width='100%'/>
                       </Container>
                    </a>
             </Link>
        </BoxItem>
    )
}

export default BoxItemHomePage