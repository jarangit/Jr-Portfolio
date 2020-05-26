import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
`
const Text = styled.div`
    width: 30%;
    position: absolute;
    bottom: 50%;
    left: 10%;
    text-align: left;
    a{
        text-decoration: none;
        background: black;
        padding: 10px;
        color: white;
        :hover{
            background: white;
            color: black;
        }
    }
`

const Header = () => {
    return(
        <Container>
            <Text>
                <h1>HI I'M JARAN</h1>
                <h1>I AM WEB PROGRAMER</h1>
                <p>Next.js can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/).</p>
                <Link href = '/' >
                    <a> MY CSV </a>
                </Link>
            </Text>
            <img src="/Image/Header.jpg" width='100%'/>
        </Container>
    )
}

export default Header