import Link from "next/link"
import styled from 'styled-components'

const BoxItem = styled.div`
    margin-bottom: 10px;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li{
            margin: 10px;
            background: gray;
            list-style: none;
            width: 400px;
            height: 250px;
            a{
                color: black;
                text-decoration: none;
            }
        }
    }
`

const BoxItemHomePage = () => {
    return(
        <BoxItem>
            <ul>
                <li>
                    <Link href = '/' ><a>Item</a></Link>
                </li>
                <li>
                    <Link href = '/' ><a>Item</a></Link>
                </li>
                <li>
                    <Link href = '/' ><a>Item</a></Link>
                </li>
                <li>
                    <Link href = '/' ><a>Item</a></Link>
                </li>
                <li>
                    <Link href = '/' ><a>Item</a></Link>
                </li>
                <li>
                    <Link href = '/' ><a>Item</a></Link>
                </li>
            </ul>
        </BoxItem>
    )
}

export default BoxItemHomePage