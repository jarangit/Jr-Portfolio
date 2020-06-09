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
                <Link href = '/' >
                    <a> MY CV </a>
                </Link>
            </Text>
            <img src= '//images.ctfassets.net/mhf3i20liehl/1dpD4I7KVFDQSBWOdy4J5A/8d0ba47a353e90651be8e97aa3ab9cf5/_________________________________________0150.jpg' width='100%'/>
        </Container>
    )
}
export default Header