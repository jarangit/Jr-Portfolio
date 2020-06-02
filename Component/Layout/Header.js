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

const Header = (props) => {
    return(
        <Container>
            <Text>
                <h1>HI I'M JARAN</h1>
                {/* <h1> {props.dataApi.name} </h1>
                <p> {props.dataApi.content} </p> */}
                <Link href = '/' >
                    <a> MY CV </a>
                </Link>
            </Text>
            <img src="/Image/Header.jpg" width='100%'/>
        </Container>
    )
}

export default Header