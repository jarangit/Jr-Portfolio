import Link from "next/link"
import styled from 'styled-components'

const MenuItem = styled.div`
    z-index: 3;
    top: 0;
    width: 100%;
    position: fixed;
    display:flex;
    justify-content: space-around;
    align-items: baseline;
    background: black;
    a{
        text-decoration: none;
        color: white;
    }
    ul{
        display: flex;
        li{
            margin: 15px 0;
            list-style: none;
            padding: 0 10px;
        }
    }
`
const Menu = () => {
    return(
        <MenuItem>
          <div>
              <Link href = '/'>
                <a>
                    <h1> Jr </h1>
                </a>
              </Link>
          </div>
          <div>
            <ul>
                    <li>
                        <Link href = '/' ><a>HOME</a></Link>
                    </li>
                    <li>
                        <Link href = '/About' ><a>ABOUT</a></Link>
                    </li>
                    <li>
                        <Link href = '/Contact' ><a>CONTACT</a></Link>
                    </li>
                </ul>
          </div>
        </MenuItem>
    )
}

export default Menu