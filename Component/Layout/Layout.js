import Menu from "./Menu"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from './Footer'
import styled from 'styled-components'

const Div = styled.div`
  height: 86px;
`
const Layout = (props) => {
    return(
        <div>
            <Menu/>
            <Div/>
                <div>{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Layout