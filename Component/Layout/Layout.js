import Menu from "./Menu"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from './Footer'
const Layout = (props) => {
    return(
        <div>
            <Menu/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout