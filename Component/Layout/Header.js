import styled from 'styled-components'
import Link from 'next/link'
import axios from "axios"
import { useEffect, useState } from 'react'

const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
    z-index:2;
    height: 700px;
    overflow:hidden;
    @media all and (max-width: 900px){
        height: auto;

    }
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
            @media all and (max-width: 900px){
                width: 50%;
                left: 25%;
                text-align: center;
                h1{
                    font-size:120%;
                }
                a{
                    padding: 5px;
                    font-size: 70%;
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
            <img src= '//images.ctfassets.net/mhf3i20liehl/47hetfU3UDalOB6JyBviUw/e68777d25eaf76d8aca60039feb499af/18084.png' width='100%'/>
        </Container>
    )
}
export default Header