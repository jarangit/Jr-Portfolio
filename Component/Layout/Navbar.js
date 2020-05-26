import Link from "next/link"
import styled from 'styled-components'

const NavbarItem = styled.div`
    margin: 50px 0 ;
    ul{
        display: flex;
        justify-content: center;
        li{
            list-style: none;
            a{
                color: black;
                text-decoration: none;
                padding: 0 50px;
                :hover{
                    color: gray;
                }
            }
        }
    }
`

const Navbar = () => {
    return(
        <NavbarItem>
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
            </ul>
        </NavbarItem>
    )
}

export default Navbar