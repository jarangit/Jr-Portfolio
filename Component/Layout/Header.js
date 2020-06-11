import styled from 'styled-components'
import Link from 'next/link'
import axios from "axios"
import { useEffect, useState } from 'react'

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
    div{
        margin-top: 10px;
    }
    a{
        text-decoration: none;
        background: black;
        padding: 10px;
        color: white;
        margin-top: 20px;
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
                <h1>I'M WEB PROGRAMER</h1>
                <div>
                <Link href = '/About' >
                    <a> MY CV </a>
                </Link>
                </div>
            </Text>
            <img src= '//images.ctfassets.net/mhf3i20liehl/59r1jGdXAvPzCoQhv9IbXX/2e6debdaafd0248bdb14deaf732628f8/18084.jpg' width='100%'/>
        </Container>
    )
}
export default Header